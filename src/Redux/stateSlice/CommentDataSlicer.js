import { createSlice } from "@reduxjs/toolkit";

export const CommentDataSlicer = createSlice({
  name: "CommentData",
  initialState: {
    data: [],
    total: [],
    comment: [],
  },
  reducers: {
    paginationAllComment: (state, action) => {
      state.data = action.payload;
    },
    totalComment: (state, action) => {
      state.total = action.payload;
    },
    commentByBlogID: (state, action) => {
      state.comment = action.payload;
    },
  },
});

export const { totalComment, paginationAllComment, commentByBlogID } =
  CommentDataSlicer.actions;
export default CommentDataSlicer.reducer;
