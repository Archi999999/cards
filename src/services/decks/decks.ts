import { baseApi } from '@/services/base-api.ts'
import { DecksParams, DecksResponse } from '@/services/decks/types.ts'

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
    createDeck: build.mutation<any, { name: string }>({
      query: ({ name }) => ({
        url: 'v1/decks',
        method: 'POST',
        body: { name },
      }),
      invalidatesTags: ['Decks'],
    }),
  }),
})

export const { useGetDecksQuery, useCreateDeckMutation } = decksApi
