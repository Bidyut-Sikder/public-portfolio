import { createSlice } from "@reduxjs/toolkit";

export const MessageDataSlice = createSlice({
  name: "MessageData",
  initialState: {
    data: [],
    pagination: [],
    singleMessage: [],
    total: 0,
  },
  reducers: {
    loadMessageData: (state, action) => {
      state.data = action.payload;
    },
    paginationMessageData: (state, action) => {
      state.pagination = action.payload;
    },
    totalMessageData: (state, action) => {
      state.total = action.payload;
    },
    loadSingleMessageData: (state, action) => {
      state.singleMessage = action.payload;
    },
  },
});

export const {
  loadMessageData,
  paginationMessageData,
  totalMessageData,
  loadSingleMessageData,
} = MessageDataSlice.actions;
export default MessageDataSlice.reducer;
