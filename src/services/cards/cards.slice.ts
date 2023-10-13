import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  userId: '',
  nameCard: '',
}

export const cardsSlice = createSlice({
  initialState,
  name: 'cardsSlice',
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload
    },
    setNameCard: (state, action: PayloadAction<string>) => {
      state.nameCard = action.payload
    },
  },
})
