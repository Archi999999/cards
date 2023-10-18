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
import {RootState} from "@/services/store.ts";

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
      query: ({ id }) => ({
          url: `v1/decks/${id}`,
          method: 'DELETE',
        }),
      onQueryStarted({ id }, { dispatch, getState, queryFulfilled }) {
        const state = getState() as RootState
        const { itemsPerPage, currentPage, maxCardsCount, minCardsCount, searchByName } = state.decksSlice
        const authorId = state.authSlice.userId
        console.log(itemsPerPage, authorId, searchByName, minCardsCount, maxCardsCount, currentPage)
        const patchResult = dispatch(
          decksApi.util.updateQueryData(
            'getDecks',
              {authorId, itemsPerPage, currentPage, maxCardsCount, minCardsCount, name: searchByName },
            draft => {
              draft.items = draft.items.filter(deck => deck.id !== id)
            })
        )
        queryFulfilled.catch(patchResult.undo)
        },
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
