import { baseApi } from '@/services/base-api.ts'
import {
  CardsResponse,
  CreateCardInput,
  GetRequestCards,
  OneCardResponse,
} from '@/services/cards/types.ts'
import {RootState} from "@/services/store.ts";

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
    //   onQueryStarted(args, {dispatch, getState, queryFulfilled}){
    //     const state = getState() as RootState
    //     const userId = state.cardsSlice.userId
    //
    //     const patchResult = dispatch(
    //         cardsApi.util.updateQueryData('getCards', args, draft => {
    //           const newCard = {
    //             deckId: args.id,
    //             id: 'someId',
    //             userId: userId,
    //             question: args.question,
    //             answer: args.answer,
    //             shots: 0,
    //             answerImg: '',
    //             questionImg: '',
    //             questionVideo: '',
    //             answerVideo: '',
    //             grade: 0,
    //             created: 'date',
    //             updated: 'date'
    //           }
    //           draft.items.unshift(newCard)
    //         })
    //     )
    //     queryFulfilled.catch(patchResult.undo)
    //   },
      invalidatesTags: ['Cards'],
    }),
    deleteCard: build.mutation<any, { id: string }>({
      query: ({ id }) => ({
        url: `v1/cards/${id}`,
        method: 'DELETE',
      }),
      onQueryStarted({ id }, {dispatch, getState, queryFulfilled}){
        const state = getState() as RootState
        const deckId = state.cardsSlice.deckId
        const patchResult = dispatch(
            cardsApi.util.updateQueryData('getCards', {id: deckId}, (draft)=> {
              draft.items = draft.items.filter(el=>el.id !== id)
            })
        )
        queryFulfilled.catch(patchResult.undo)
      },
      // invalidatesTags: ['Cards'],
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
