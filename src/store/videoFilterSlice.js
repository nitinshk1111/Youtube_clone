import { createSlice } from "@reduxjs/toolkit";

export const videoFilterSlice = createSlice({
  name: "videoFilter",
  initialState: {},
  reducers: {
    setFilterType: (state, action) => {
      state.filter = { ...action.payload };
    },
  },
});

export const { setFilterType } = videoFilterSlice.actions;
export default videoFilterSlice.reducer;
