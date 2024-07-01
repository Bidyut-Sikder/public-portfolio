import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../stateSlice/ProfileSlice";
import loaderReducer from "../stateSlice/LoaderSettingSlice";
import blogDataReducer from "../stateSlice/BlogDataSlicer";
import singleBlogDataReducer from "../stateSlice/SingleBlogDataSlicer";
import ProjectDataReducer from "../stateSlice/ProjectDataSlice";
import SingleProjectDataReducer from "../stateSlice/SingleProjectDataSlicer";
import CommentDataReducer from "../stateSlice/CommentDataSlicer";
import MessageDataReducer from "../stateSlice/MessageDataSlice";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    LoaderSetting: loaderReducer,
    BlogData: blogDataReducer,
    SingleBlogData: singleBlogDataReducer,
    ProjectData: ProjectDataReducer,
    SingleProjectData: SingleProjectDataReducer,
    CommentData: CommentDataReducer,
    MessageData: MessageDataReducer,
  },
});

export default store;
