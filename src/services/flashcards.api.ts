import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {
  CreateDeckArgs,
  DefaultDeckResponse,
  GetDecksArgs,
  GetDecksResponse,
  UpdateDeckArgs,
} from './decks.types'

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
      createDeck: builder.mutation<DefaultDeckResponse, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: args => ({
          body: args,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      deleteDeck: builder.mutation<DefaultDeckResponse, string>({
        invalidatesTags: ['Decks'],
        query: id => ({
          method: 'DELETE',
          url: `/v1/decks/${id}`,
        }),
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          method: 'GET',
          params: { ...(args ?? {}), name: args?.name ?? undefined },
          url: `v2/decks`,
        }),
      }),
      updateDeck: builder.mutation<DefaultDeckResponse, UpdateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: ({ id, ...args }) => ({
          body: args,
          method: 'PATCH',
          url: `/v1/decks/${id}`,
        }),
      }),
    }
  },
  reducerPath: 'flashcardsApi',
  tagTypes: ['Decks'],
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} = flashcardsApi
