export type DefaultDeckResponse = {
  cardsCount: number
  cover?: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

//========================================================================================

type Author = {
  id: string
  name: string
}

type Deck = {
  author: Author
} & DefaultDeckResponse

type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type GetDecksResponse = {
  items: Deck[]
  pagination: Pagination
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}

//========================================================================================

export type CreateDeckArgs = {
  cover?: string
  isPrivate: boolean // по дефолту поставить false
  name: string // валидация описана в апишке
}

//========================================================================================

export type UpdateDeckArgs = { id: string } & Partial<CreateDeckArgs>

//========================================================================================

export type DeleteDecksArgs = { id: string }

//========================================================================================