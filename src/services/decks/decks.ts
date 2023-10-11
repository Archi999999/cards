import { baseApi } from '@/services/base-api.ts'
import {
  CreateDeckArgs,
  Deck,
  DecksParams,
  DecksResponse,
  DeleteDeckArgs,
  UpdateDeckArgs,
} from '@/services/decks/types.ts'

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
    createDeck: build.mutation<Deck, CreateDeckArgs>({
      query: ({ name, isPrivate }) => ({
        url: 'v1/decks',
        method: 'POST',
        body: { name, isPrivate },
      }),
      // async onQueryStarted(_, { dispatch, getState, queryFulfilled }) {
      //   console.log('here')
      //   const state = getState() as RootState
      //
      //   console.log(state)
      //   const { orderBy, searchByName, itemsPerPage, currentPage } = state.decksSlice
      //   const patchResult = dispatch(
      //     decksApi.util.updateQueryData(
      //       'getDecks',
      //       { name: searchByName, orderBy, itemsPerPage, currentPage },
      //       (draft) => {
      //         debugger
      //         console.log(draft)
      //         draft.items.pop()
      //         draft.items.unshift()
      //       }
      //     )
      //   )
      //
      //   try {
      //     await queryFulfilled
      //   } catch {
      //     patchResult.undo()
      //   }
      // },
      invalidatesTags: ['Decks'],
    }),
    updateDeck: build.mutation<any, UpdateDeckArgs>({
      query: ({ id, name, isPrivate }) => ({
        url: `v1/decks/${id}`,
        method: 'PATCH',
        body: { name, isPrivate },
      }),
      invalidatesTags: ['Decks'],
    }),
    deleteDeck: build.mutation<void, DeleteDeckArgs>({
      query: ({ id }) => {
        return {
          url: `v1/decks/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: ['Decks'],
      // async onQueryStarted({ id }, { dispatch, getState, queryFulfilled }) {
      //   const state = getState() as RootState
      //
      //   console.log(id)
      //   const { orderBy, searchByName, itemsPerPage, currentPage } = state.decksSlice
      //   const patchResult = dispatch(
      //     decksApi.util.updateQueryData(
      //       'getDecks',
      //       { name: searchByName, orderBy, itemsPerPage, currentPage },
      //       draft => {
      //         debugger
      //         console.log(draft)
      //         draft.items = draft.items.filter(deck => deck.id !== id)
      //       }
      //     )
      //   )
      //
      //     try {
      //       await queryFulfilled
      //     } catch {
      //       patchResult.undo()
      //     }
      //   },
      //   invalidatesTags: ['Decks'],
    }),
  }),
})

export const {
  useGetDecksQuery,
  useCreateDeckMutation,
  useUpdateDeckMutation,
  useDeleteDeckMutation,
} = decksApi
