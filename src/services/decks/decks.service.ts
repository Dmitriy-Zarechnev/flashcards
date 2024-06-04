import { flashcardsApi } from '@/services/flashcards.api'

import {
  DefaultDeckResponse,
  DeleteDecksArgs,
  GetDecksArgs,
  GetDecksResponse,
  UpdateDeckArgs,
} from './decks.types'

const decksService = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<DefaultDeckResponse, FormData>({
        invalidatesTags: ['Decks'],
        query: formData => ({
          body: formData,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      deleteDeck: builder.mutation<DefaultDeckResponse, DeleteDecksArgs>({
        invalidatesTags: ['Decks'],
        query: ({ id }) => ({
          method: 'DELETE',
          url: `v1/decks/${id}`,
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
          url: `v1/decks/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useUpdateDeckMutation,
} = decksService
