import { baseApi } from '@/services/base.api'
import {
  CreateCardArgs,
  DefaultIdArg,
  GetCardsResponse,
  UpdateCardArgs,
} from '@/services/types/decks.types'

const cardsService = baseApi.injectEndpoints({
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
      getCards: builder.query<GetCardsResponse[], DefaultIdArg>({
        providesTags: ['Cards'],
        query: id => ({
          method: 'GET',
          params: id,
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
