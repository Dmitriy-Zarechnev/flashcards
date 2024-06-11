import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const flashcardsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
  }),
  endpoints: () => ({}),
  reducerPath: 'flashcardsApi',
  tagTypes: ['Decks', 'Cards', 'Auth'],
})

/*

🟢 login - test@test.com
    password - test

🟠 login - Malisa.kuz@yandex.ru
    password - 123qwe123qwe

*/
