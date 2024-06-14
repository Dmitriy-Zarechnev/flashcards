import { flashcardsApi } from '@/services/api/flashcards.api'
import {
  DefaultDeck,
  DefaultIdArg,
  GetDeckByIdResponse,
  GetDeckMinMaxCardsResponse,
  GetDecksArgs,
  GetDecksResponse,
  UpdateDeckArgs,
} from '@/services/types/decks.types'

const decksService = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<DefaultDeck, FormData>({
        invalidatesTags: ['Decks'],
        query: formData => ({
          body: formData,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      deleteDeck: builder.mutation<DefaultDeck, DefaultIdArg>({
        invalidatesTags: ['Decks'],
        query: ({ id }) => ({
          method: 'DELETE',
          url: `v1/decks/${id}`,
        }),
      }),
      getDeckById: builder.query<GetDeckByIdResponse, DefaultIdArg>({
        query: ({ id }) => ({
          method: 'GET',
          url: `v1/decks/${id}`,
        }),
      }),
      getDeckMinMaxCards: builder.query<GetDeckMinMaxCardsResponse, void>({
        query: () => ({
          method: 'GET',
          url: '/v2/decks/min-max-cards',
        }),
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          method: 'GET',
          params: {
            ...(args ?? {}),
            name: args?.name ?? undefined,
          },
          url: `v2/decks`,
        }),
      }),
      updateDeck: builder.mutation<DefaultDeck, UpdateDeckArgs>({
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
  useGetDeckByIdQuery,
  useGetDeckMinMaxCardsQuery,
  useGetDecksQuery,
  useUpdateDeckMutation,
} = decksService
