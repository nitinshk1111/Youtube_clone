import { createSlice } from "@reduxjs/toolkit";

export const suggestionSlice = createSlice({
    name:"suggestion",
    initialState: {},
    reducers:{
        cacheSuggestion: (state,action) => {
            state= Object.assign(state, action.payload)
        }
    }
});

export const {cacheSuggestion} = suggestionSlice.actions;
export default suggestionSlice.reducer;