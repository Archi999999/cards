export type CardsResponse = {
  items: RootObjectItems[]
  pagination: RootObjectPagination
}
export type RootObjectItems = {
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  answerImg: string
  questionImg: string
  questionVideo: string
  answerVideo: string
  grade: number
  created: string
  updated: string
}
export type RootObjectPagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}

export type GetRequestCards = {
  id: string
  question?: string
  answer?: string
  orderBy?: string | null
  currentPage?: number
  itemsPerPage?: number
}
export type CreateCardInput = {
  id: string
  question: string
  answer: string
  answerImg?: string | null
  questionVideo?: string
  answerVideo?: string
  questionImg?: string | null
}
export type OneCardResponse = {
  id: string
  deckId: string
  userId: string
  question: string
  answer: string
  shots: number
  answerImg: string
  questionImg: string
  questionVideo: string
  answerVideo: string
  rating: number
  created: string
  updated: string
}
