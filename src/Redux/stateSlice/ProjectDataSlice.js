import { createSlice } from "@reduxjs/toolkit";

export const ProjectDataSlice = createSlice({
  name: "ProjectData",
  initialState: {
    data: [],
    pagination: [],
    total: 0,
  },
  reducers: {
    loadProjectData: (state, action) => {
      state.data = action.payload;
    },
    paginationProjectData: (state, action) => {
      state.pagination = action.payload;
    },
    totalProjectData: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { loadProjectData, paginationProjectData, totalProjectData } =
  ProjectDataSlice.actions;
export default ProjectDataSlice.reducer;
