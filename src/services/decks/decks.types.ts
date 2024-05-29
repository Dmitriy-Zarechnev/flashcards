type Author = {
  id: string
  name: string
}

type Deck = {
  author: Author
  cardsCount: number
  cover?: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type DecksListResponse = {
  items: Deck[]
  pagination: Pagination
}
