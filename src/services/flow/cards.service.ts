import { flashcardsApi } from '@/services/api/flashcards.api'
import {
  Card,
  CreateCardArgs,
  DefaultIdArg,
  GetCardsArgs,
  GetCardsResponse,
  GradeType,
  UpdateCardArgs,
} from '@/services/types/decks.types'

const cardsService = flashcardsApi.injectEndpoints({
  endpoints: builder => {
    return {
      createCard: builder.mutation<GetCardsResponse, CreateCardArgs>({
        // TODO тут нужно еще определить что валидирвоать - деки или карты
        invalidatesTags: ['Cards'],
        query: ({ answer, answerImg, id, question, questionImg }) => {
          // будет преобразовывать входные args в formData тут
          const formData = new FormData()

          formData.append('answer', answer)
          formData.append('question', question)

          if (answerImg) {
            formData.append('answerImg', answerImg)
          }

          if (questionImg) {
            formData.append('questionImg', questionImg)
          }

          return {
            body: formData,
            method: 'POST',
            url: `v1/decks/${id}/cards`,
          }
        },
      }),
      deleteCard: builder.mutation<any, DefaultIdArg>({
        invalidatesTags: ['Cards'],
        query: ({ id }) => ({
          method: 'DELETE',
          url: `v1/cards/${id}`,
        }),
      }),
      getCards: builder.query<GetCardsResponse, GetCardsArgs>({
        providesTags: ['Cards'],
        query: ({ id, ...args }) => ({
          method: 'GET',
          params: {
            ...(args ?? {}),
          },
          url: `v1/decks/${id}/cards`,
        }),
      }),
      getRandomCard: builder.query<Card, DefaultIdArg>({
        query: ({ id }) => ({
          method: 'GET',
          url: `v1/decks/${id}/learn`,
        }),
      }),
      saveGradeCard: builder.mutation<Card, GradeType>({
        query: ({ cardId, grade, id }) => ({
          body: { cardId, grade },
          method: 'POST',
          url: `v1/decks/${id}/learn`,
        }),
      }),
      updateCard: builder.mutation<GetCardsResponse, UpdateCardArgs>({
        invalidatesTags: ['Cards'],
        query: ({ answer, answerImg, id, question, questionImg }) => {
          const formData = new FormData()

          if (answer) {
            formData.append('answer', answer)
          }
          if (question) {
            formData.append('question', question)
          }
          if (answerImg) {
            formData.append('answerImg', answerImg)
          } else if (answerImg === null) {
            formData.append('answerImg', '')
          }
          if (questionImg) {
            formData.append('questionImg', questionImg)
          } else if (questionImg === null) {
            formData.append('questionImg', '')
          }

          return {
            body: formData,
            method: 'PATCH',
            url: `v1/cards/${id}`,
          }
        },
      }),
    }
  },
})

export const {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardsQuery,
  useGetRandomCardQuery,
  useSaveGradeCardMutation,
  useUpdateCardMutation,
} = cardsService
