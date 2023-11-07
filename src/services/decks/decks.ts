import { baseApi } from '@/services/base-api.ts'
import {
  CreateDeckArgs,
  Deck,
  DeckById,
  DecksParams,
  DecksResponse,
  DeleteDeckArgs,
  UpdateDeckArgs,
} from '@/services/decks/types.ts'
import { RootState } from '@/services/store.ts'

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
    getDeckById: build.query<DeckById, { id: string }>({
      query: ({ id }) => ({
        url: `/v1/decks/${id}`,
        method: 'GET',
      }),
      providesTags: ['Decks'],
    }),
    createDeck: build.mutation<Deck, CreateDeckArgs>({
      query: data => ({
        url: 'v1/decks',
        method: 'POST',
        body: data,
      }),
      //   onQueryStarted({ name}, { dispatch, getState, queryFulfilled }) {
      //     const state = getState() as RootState
      //     const {minCardsCount, maxCardsCount, searchByName, itemsPerPage, currentPage } = state.decksSlice
      //     const authorId = state.authSlice.userId
      //     const patchResult = dispatch(
      //       decksApi.util.updateQueryData(
      //         'getDecks',
      //         {itemsPerPage, authorId, name: searchByName, minCardsCount,  maxCardsCount, currentPage},
      //         (draft) => {
      //           const newCard = {
      //             id: '',
      //             userId: authorId,
      //             name: name,
      //             isPrivate: false,
      //             shots: 0,
      //             cover: null,
      //             rating:0,
      //             created: '',
      //             updated: '',
      //             cardsCount: 0,
      //             author: {id: authorId, name: ''}
      //           }
      //           draft.items.pop()
      //           draft.items.unshift(newCard)
      //         }
      //       )
      //     )
      //     queryFulfilled.catch(patchResult.undo)
      //   },
      invalidatesTags: ['Decks'],
    }),
    updateDeck: build.mutation<any, UpdateDeckArgs>({
      query: ({ id, data }) => ({
        url: `v1/decks/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Decks'],
    }),
    deleteDeck: build.mutation<void, DeleteDeckArgs>({
      query: ({ id }) => ({
        url: `v1/decks/${id}`,
        method: 'DELETE',
      }),
      onQueryStarted({ id }, { dispatch, getState, queryFulfilled }) {
        const state = getState() as RootState
        const { itemsPerPage, currentPage, maxCardsCount, minCardsCount, searchByName } =
          state.decksSlice
        const authorId = state.authSlice.userId
        const patchResult = dispatch(
          decksApi.util.updateQueryData(
            'getDecks',
            {
              authorId,
              itemsPerPage,
              currentPage,
              maxCardsCount,
              minCardsCount,
              name: searchByName,
            },
            draft => {
              draft.items = draft.items.filter(deck => deck.id !== id)
            }
          )
        )

        queryFulfilled.catch(patchResult.undo)
      },
      invalidatesTags: ['Decks'],
    }),
  }),
})

export const {
  useGetDecksQuery,
  useCreateDeckMutation,
  useUpdateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckByIdQuery,
} = decksApi
