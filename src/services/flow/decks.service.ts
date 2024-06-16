import { flashcardsApi } from '@/services/api/flashcards.api'
import {
  CreateDeckArgs,
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
      createDeck: builder.mutation<DefaultDeck, CreateDeckArgs>({
        invalidatesTags: ['Decks'],
        query: ({ cover, isPrivate, name }) => {
          // будет преобразовывать входные args в formData тут
          const formData = new FormData()

          // name, isPrivate обязательны, cover проверяем
          formData.append('name', name)
          formData.append('isPrivate', isPrivate.toString())
          if (cover) {
            formData.append('cover', cover)
          }

          return {
            body: formData,
            method: 'POST',
            url: `v1/decks`,
          }
        },
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
        query: ({ cover, id, isPrivate, name }) => {
          const formData = new FormData()

          // !!! так как тут метод patch, ужно отправлять только те свойства, которые нужно поменять
          if (name) {
            formData.append('name', name)
          }
          if (isPrivate) {
            formData.append('isPrivate', isPrivate.toString())
          }
          if (cover) {
            formData.append('cover', cover)
          } else if (cover === null) {
            // если передали null, значи мы хотим удалить cover
            formData.append('cover', '')
          }

          return {
            body: formData,
            method: 'PATCH',
            url: `v1/decks/${id}`,
          }
        },
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
