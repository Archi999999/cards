import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    email: '',
    name: '',
    avatar: '',
}

export const authSlice = createSlice({
    initialState,
    name: 'authSlice',
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setAvatar: (state, action: PayloadAction<string>) => {
            state.avatar = action.payload
        }
    }
})