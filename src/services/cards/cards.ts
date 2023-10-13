import { baseApi } from '@/services/base-api.ts'
import { CardsResponse, GetRequestCards } from '@/services/cards/types.ts'

const cardsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getCards: build.query<CardsResponse, GetRequestCards>({
      query: ({ id, ...args }) => {
        return {
          url: `v1/decks/${id}/cards`,
          method: 'GET',
          params: { ...args },
        }
      },
      providesTags: ['Cards'],
    }),
  }),
})

export const { useGetCardsQuery } = cardsApi
