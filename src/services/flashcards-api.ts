import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { CreateDeckArgs, CreateDeckResponse, DecksListResponse, GetDecksArgs } from './decks.types'

export const flashcardsApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true')
    },
  }),
  endpoints: builder => {
    return {
      createDeck: builder.mutation<CreateDeckResponse, CreateDeckArgs>({
        query: args => ({
          body: args,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      getDecks: builder.query<DecksListResponse, GetDecksArgs | void>({
        query: args => ({
          method: 'GET',
          params: args ?? undefined,
          url: `v2/decks`,
        }),
      }),
    }
  },
  reducerPath: 'flashcardsApi',
})

export const { useCreateDeckMutation, useGetDecksQuery } = flashcardsApi
