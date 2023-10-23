import { baseApi } from '@/services/base-api.ts'
import {
  CardsResponse,
  CreateCardInput,
  GetRequestCards,
  OneCardResponse,
} from '@/services/cards/types.ts'

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
    getCardById: build.query<OneCardResponse, { id: string }>({
      query: ({ id }) => ({
        url: `v1/cards/${id}`,
        method: 'GET',
      }),
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
    getRandomCard: build.query<OneCardResponse, { idDeck: string; previousCardId?: string }>({
      query: ({ idDeck, previousCardId }) => ({
        url: `/v1/decks/${idDeck}/learn`,
        method: 'GET',
        params: { previousCardId },
      }),
      providesTags: ['Cards'],
    }),
    updateGradeCard: build.mutation<any, { idDeck: string; cardId: string; grade: number }>({
      query: ({ idDeck, cardId, grade }) => ({
        url: `/v1/decks/${idDeck}/learn`,
        method: 'POST',
        body: { cardId, grade },
      }),
      invalidatesTags: ['Cards'],
    }),
  }),
})

export const {
  useGetCardsQuery,
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardByIdQuery,
  useUpdateCardMutation,
  useGetRandomCardQuery,
  useUpdateGradeCardMutation,
} = cardsApi
