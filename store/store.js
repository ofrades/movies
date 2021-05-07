import { configureStore } from "@reduxjs/toolkit";

import likesReducer from "../components/Likes/likesSlice.js";
import dislikesReducer from "../components/Dislikes/dislikesSlice.js";

const store = configureStore({
  reducer: {
    likes: likesReducer,
    dislikes: dislikesReducer,
  },
});

export default store;
