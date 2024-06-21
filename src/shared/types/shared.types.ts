import { CreateCardArgs } from '@/services'

export type ButtonTitle = 'Card' | 'Deck'
export type ModalVariant = 'add' | 'edit'

export type CardData = { answerImg?: string; questionImg?: string } & Omit<
  CreateCardArgs,
  'answerImg' | 'id' | 'questionImg'
>
