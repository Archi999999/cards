export type CardsResponse = {
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

export type GetRequestCards = {
  id: string
  question?: string
  answer?: string
  orderBy: string | null
  currentPage?: number
  itemsPerPage?: number
}
