export {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
  useUpdateUserDataMutation,
} from './auth.service'
export {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardsQuery,
  useUpdateCardMutation,
} from './cards.service'
export {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckByIdQuery,
  useGetDecksQuery,
  useUpdateDeckMutation,
} from './decks.service'

export type { Deck } from './types/decks.types'
