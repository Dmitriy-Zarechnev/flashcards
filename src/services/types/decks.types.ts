//========================================================================================
// [ DEFAULT ]
export type DefaultDeck = {
  cardsCount: number
  cover?: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

type Author = {
  id: string
  name: string
}

export type Deck = {
  author: Author
} & DefaultDeck

export type Card = {
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

type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

//========================================================================================
// [ RESPONSE ]

export type GetDecksResponse = {
  items: Deck[]
  pagination: Pagination
}

export type GetCardsResponse = {
  items: Card[]
  pagination: Pagination
}

export type GetDeckByIdResponse = { isFavorite: boolean } & DefaultDeck

export type GetDeckMinMaxCardsResponse = {
  max: number
  min: number
}

//========================================================================================
// [ ARGS ]

export type DefaultIdArg = { id: string }

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}

export type CreateDeckArgs = {
  cover?: File | null
  isPrivate: boolean
  name: string
}

export type UpdateDeckArgs = CreateDeckArgs & DefaultIdArg

export type CreateCardArgs = {
  answer: string
  answerImg?: string
  answerVideo?: string
  question: string
  questionImg?: string
  questionVideo?: string
} & DefaultIdArg

export type UpdateCardArgs = DefaultIdArg & Partial<CreateCardArgs>
