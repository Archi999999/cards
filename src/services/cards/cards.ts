import { baseApi } from '@/services/base-api.ts'
import { CardsResponse, CreateCardInput, GetRequestCards } from '@/services/cards/types.ts'

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
    createCard: build.mutation<any, CreateCardInput>({
      query: ({ id, ...body }) => {
        return {
          url: `v1/decks/${id}/cards`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: ['Cards'],
    }),
    deleteCard: build.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: `v1/cards/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cards'],
    }),
    updateCard: build.mutation<any, CreateCardInput>({
      query: ({ id, ...body }) => ({
        url: `/v1/cards/${id}`,
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Cards'],
    }),
  }),
})

export const { useGetCardsQuery, useCreateCardMutation, useDeleteCardMutation } = cardsApi
