import { createSlice } from "@reduxjs/toolkit";
import { createElement } from "react";


const initialState = {
    postData: []
}


const postSlice = createSlice({
    name: "postSlice",
    initialState,
    reducers: {
        getAllPost: (state, action) => {
            console.log(action.payload)
            state.postData = action.payload
        },

    }
})


export const { getAllPost } = postSlice.actions

export default postSlice.reducer