import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {OrderByType} from "@/services/decks/types.ts";

const initialState = {
  itemsPerPage: 10,
  currentPage: 1,
  searchByName: '',
  orderBy: 'updated-desc' as  OrderByType,
  minCardsCount: 0,
  maxCardsCount: 0,
}

export const decksSlice = createSlice({
  initialState,
  name: 'decksSlice',
  reducers: {
    setItemPerPage: (state, action: PayloadAction<number>) => {
      state.itemsPerPage = action.payload
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setSearchByName: (state, action: PayloadAction<string>) => {
      state.searchByName = action.payload
    },
    setOrderBy: (state, action: PayloadAction<OrderByType>) => {
      state.orderBy = action.payload
    },
    setMinCardsCount: (state, action: PayloadAction<number>) => {
      state.minCardsCount = action.payload
    },
    setMaxCardsCount: (state, action: PayloadAction<number>) => {
      state.maxCardsCount = action.payload
    },
  },
})
