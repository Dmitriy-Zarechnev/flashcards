import { routes } from '@/app'
import { PATH } from '@/shared/utils/routerVariables'
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'

import { getPathname } from './tools/getUrlPath'

/* не обращать внимание на Mutex, он по сути тут не нужен */
const mutex = new Mutex()

/* instance */
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es',

  prepareHeaders: headers => {
    const token = localStorage.getItem('accessToken')

    // для запроса refresh-token нам не нужно заменять headers
    // если не писать это условие, то мы будем вместо refresh-token
    // отправолять access-token
    if (headers.get('Authorization')) {
      return
    }

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
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
        /* пробуем рефрешнуть токен
           ! обязатеотнр нужно передать нужные аргуементы для обновления токена
           почему метод post? потому что мы отправляем старый токен, он банится на сервере
           и нам приходит уже новый токен */

        const refreshToken = localStorage.getItem('refreshToken')

        /* нужно поменять headers
           так как header ожидает refresh-token а не access-token, чтобы отправиться его на сервер */
        const refreshResult = (await baseQuery(
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
            method: 'POST',
            url: '/v2/auth/refresh-token',
          },
          api,
          extraOptions
        )) as any

        // пришел ответ с refresh-token
        if (
          refreshResult.data &&
          typeof refreshResult.data === 'object' &&
          'accessToken' in refreshResult.data &&
          'refreshToken' in refreshResult.data &&
          typeof refreshResult.data.accessToken === 'string' &&
          typeof refreshResult.data.refreshToken === 'string'
        ) {
          localStorage.setItem('accessToken', refreshResult.data.accessToken.trim())
          localStorage.setItem('refreshToken', refreshResult.data.refreshToken.trim())

          // 💥 если засетались все два токена но пользователь оказался на страничке логинизации, нужно его перенаправить на /decks
          if (getPathname() === PATH.SIGNIN) {
            await routes.navigate(PATH.DECKSPAGE)
          }

          // делаем повтореный запрос уже с новыми токенами
          await baseQuery(args, api, extraOptions)
        } else {
          // удаляем accessToken если не прошел запрос, чтобы можно было направить пользователя на PublicRoutes
          localStorage.removeItem('accessToken')

          /* если нет рефрешь токена, то и результата не придет, значит перенаправим на логинизацию
            ⛔ обязательно нужно перенаправлять туда, где нет автоматического запроса! а то будет бесконечный цикл запросов

            для возможности пользователю переходить на разные странички PublicRoutes и не быть при этом всегда пененаправленным
            на /sign-in будет проверять куда направить пользователя по услвоию */

          if (getPathname() === PATH.SIGNUP) {
            await routes.navigate(PATH.SIGNUP)
          } else if (getPathname() === PATH.RESETPASSWORD) {
            await routes.navigate(PATH.RESETPASSWORD)
          } else {
            await routes.navigate(PATH.SIGNIN)
          }
        }
      } finally {
        release()
      }
    } else {
      // относится к mutex => просто скипаем
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
