import { createSlice } from '@reduxjs/toolkit'

type Like = {
    [id: number]: boolean
}

const initialState: Like = {
    1: true,
    2: true,
}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        switchLike: (state, action) => ({
            ...state,
            [action.payload]: !state[action.payload],
        }),
    },
})

export const { switchLike } = likeSlice.actions

export default likeSlice.reducer
