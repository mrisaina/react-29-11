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
    reducers: {},
})

export default likeSlice.reducer
