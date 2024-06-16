import { baseQueryWithReauth } from '@/services/api/flashcards-base-query'
import { createApi } from '@reduxjs/toolkit/query/react'

export const flashcardsApi = createApi({
  baseQuery: baseQueryWithReauth,
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
