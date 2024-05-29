import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { DecksListResponse } from './decks/decks.types'

export const flashcardsApi = createApi({
  // baseQuery - аналог instance
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      // добавляем свойство в header чтобы работало без авторизации
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      getDecks: builder.query<DecksListResponse, void>({
        // что добавить к концу в URL запрсоа
        query: () => `v2/decks`,
      }),
    }
  },
  reducerPath: 'flashcardsApi', // название слайса
})

export const { useGetDecksQuery } = flashcardsApi
