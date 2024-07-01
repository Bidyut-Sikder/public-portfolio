import { createSlice } from "@reduxjs/toolkit";

export const BlogDataSlice = createSlice({
  name: "BlogData",
  initialState: {
    data: [],
    comment: [],
    total: [],
    params: 1,
  },
  reducers: {
    paginationBlog: (state, action) => {
      state.data = action.payload;
    },
    totalBlog: (state, action) => {
      state.total = action.payload;
    },
    paramsBlog: (state, action) => {
      state.params = action.payload;
    },
  },
});

export const { paginationBlog, totalBlog, paramsBlog } = BlogDataSlice.actions;
export default BlogDataSlice.reducer;
