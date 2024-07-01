import { createSlice } from "@reduxjs/toolkit";

export const SingleProjectDataSlicer = createSlice({
  name: "SingleProjectData",
  initialState: {
    data: [],
  },
  reducers: {
    loadSingleProjectData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { loadSingleProjectData } = SingleProjectDataSlicer.actions;
export default SingleProjectDataSlicer.reducer;
