import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'

/* не обращать внимание на Mutex, он по сути тут не нужен */
const mutex = new Mutex()

/* instance */
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es',

  prepareHeaders: headers => {
    const token = localStorage.getItem('accessToken')

    if (headers.get('Authorization')) {
      return headers
    }

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    // return headers
  },
})

/*  baseQueryWithReauth => baseQuery in fleshcards.api.ts
    по сути это - обертка над instance, которая будет вызываться на каждый запрос */
export const baseQueryWithReauth: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()

  /* ожидаем результат запроса*/
  let result = await baseQuery(args, api, extraOptions)

  // проверяем на ошибку в result, например если нет нужного токена (истек срок жизни токена)
  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        // пробуем рефрешнуть токен
        // ! обязатеотнр нужно передать нужные аргуементы для обновления токена
        // почему метод post? потому что мы отправляем старый токен, он банится на сервере
        // и нам приходит уже новый токен

        const refreshToken = localStorage.geiItem('refreshToken')

        const argsForRefreshToken = {
          // нужно поменять headers
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
          method: 'POST',
          // так как header ожидает refresh-token а не access-token, чтобы отправиться его на сервер
          url: '/v2/auth/refresh-token',
        }
        const refreshResult = await baseQuery(argsForRefreshToken, api, extraOptions)

        if (refreshResult.data) {
          api.dispatch(tokenReceived(refreshResult.data))
          // retry the initial query
          result = await baseQuery(args, api, extraOptions)
        } else {
          api.dispatch(loggedOut())
        }
      } finally {
        // release must be called once the mutex should be released again.
        release()
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
