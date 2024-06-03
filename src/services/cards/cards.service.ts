import { flashcardsApi } from '@/services/flashcards.api'

import { CardIdArgs, CreateCardArgs, GetCardsResponse, UpdateCardArgs } from './cards.types'

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
      deleteCard: builder.mutation<any, CardIdArgs>({
        invalidatesTags: ['Cards'],
        query: id => ({
          method: 'DELETE',
          params: id,
          url: `v1/cards/${id}`,
        }),
      }),
      getCards: builder.query<GetCardsResponse[], CardIdArgs>({
        providesTags: ['Cards'],
        query: id => ({
          method: 'GET',
          params: id,
          url: `v1/cards/${id}`,
        }),
      }),
      updateCard: builder.mutation<GetCardsResponse, UpdateCardArgs>({
        invalidatesTags: ['Decks'],
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
