export type DecksResponse = {
  maxCardsCount: number
  pagination: DecksResponsePagination
  items: Deck[]
}
export type DecksResponsePagination = {
  totalPages: number
  currentPage: number
  itemsPerPage: number
  totalItems: number
}
export type DecksResponseItemsAuthor = {
  id: string
  name: string
}
export type CreateDeckArgs = {
  name: string
  isPrivate?: boolean
}
export type UpdateDeckArgs = Pick<Deck, 'id' | 'cover' | 'name' | 'isPrivate'>
export type DeleteDeckArgs = Pick<Deck, 'id'>
export type Deck = {
  id: string
  userId: string
  name: string
  isPrivate: boolean
  shots: number
  cover: string | null
  rating: number
  isDeleted?: boolean | null
  isBlocked?: boolean | null
  created: string
  updated: string
  cardsCount: number
  author: DecksResponseItemsAuthor
}
export type DeckById = Omit<Deck, 'isDeleted' | 'isBlocked'>

// export type DecksParams = {
//   minCardsCount?: number
//   maxCardsCount?: number
//   name?: string
//   authorId?: string
//   orderBy?: string
//   currentPage?: number
//   itemsPerPage?: number
// } | void

export type Direction = 'asc' | 'desc'
export type Field = 'name' | 'created' | 'updated' | 'cardsCount'

export type OrderByType = `${Field}-${Direction}`

export type DecksParams = {
  minCardsCount?: number
  maxCardsCount?: number
  name?: string
  authorId?: string
  orderBy?: OrderByType
  currentPage?: number
  itemsPerPage?: number
} |void