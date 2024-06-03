export type GetCardsResponse = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}

//========================================================================================

export type CardIdArgs = { id: string }

//========================================================================================
export type UpdateCardArgs = CardIdArgs & Partial<CreateCardArgs>
//========================================================================================

export type CreateCardArgs = {
  answer: string
  answerImg?: string
  answerVideo?: string
  question: string
  questionImg?: string
  questionVideo?: string
} & CardIdArgs
//========================================================================================
