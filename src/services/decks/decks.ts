import { baseApi } from '@/services/base-api.ts'
import { Deck, DecksParams, DecksResponse } from '@/services/decks/types.ts'

const decksApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getDecks: build.query<DecksResponse, DecksParams>({
      query: params => {
        return {
          url: 'v1/decks',
          method: 'GET',
          params: params || {},
        }
      },
      providesTags: ['Decks'],
    }),
    createDeck: build.mutation<Deck, { name: string; isPrivate?: boolean }>({
      query: ({ name, isPrivate }) => ({
        url: 'v1/decks',
        method: 'POST',
        body: { name, isPrivate },
      }),
      invalidatesTags: ['Decks'],
    }),
  }),
})

export const { useGetDecksQuery, useCreateDeckMutation } = decksApi
