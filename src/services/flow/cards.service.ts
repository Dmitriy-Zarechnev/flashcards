import { flashcardsApi } from '@/services/api/flashcards.api'
import {
  CreateCardArgs,
  DefaultIdArg,
  GetCardsResponse,
  UpdateCardArgs,
} from '@/services/types/decks.types'

const cardsService = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<GetCardsResponse, CreateCardArgs>({
        invalidatesTags: ['Cards'],
        query: ({ id, ...args }) => ({
          body: args,
          method: 'POST',
          url: `v1/cards/${id}/cards`,
        }),
      }),
      deleteCard: builder.mutation<any, DefaultIdArg>({
        invalidatesTags: ['Cards'],
        query: id => ({
          method: 'DELETE',
          params: id,
          url: `v1/cards/${id}`,
        }),
      }),
      getCards: builder.query<any, DefaultIdArg>({
        providesTags: ['Cards'],
        query: ({ id }) => ({
          method: 'GET',

          // params: {
          //   ...(args ?? {}),
          //   name: args?.name ?? undefined,
          // },
          url: `v1/cards/${id}`,
        }),
      }),
      updateCard: builder.mutation<GetCardsResponse, UpdateCardArgs>({
        invalidatesTags: ['Cards'],
        query: ({ id, ...args }) => ({
          body: args,
          method: 'PATCH',
          url: `v1/cards/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardsQuery,
  useUpdateCardMutation,
} = cardsService
