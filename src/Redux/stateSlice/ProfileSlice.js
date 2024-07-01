import { createSlice } from "@reduxjs/toolkit";

export const ProfileSlice = createSlice({
  name: "Profile",
  initialState: {
    value: [],
  },
  reducers: {
    setProfile: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;
