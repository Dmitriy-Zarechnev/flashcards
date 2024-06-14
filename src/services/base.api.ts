import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',

    // нужно тут разместить токены для авторизации
    // подробнее можно почитать на Headers Authorization
    prepareHeaders: headers => {
      const token = localStorage.getItem('accessToken')

      // if (headers.get('Authorization')) {
      //   return headers
      // }

      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }

      console.log('headers', headers)

      return headers
    },
  }),
  endpoints: () => ({}),
  reducerPath: 'baseApi',
  tagTypes: ['Decks', 'Cards', 'Auth'],
})

/*

🟢 login - test@test.com
    password - test

🟠 login - Malisa.kuz@yandex.ru
    password - 123qwe123qwe

*/
