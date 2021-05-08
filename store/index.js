import { configureStore } from "@reduxjs/toolkit";

import likesReducer from "../components/Likes/likesSlice.js";
import dislikesReducer from "../components/Dislikes/dislikesSlice.js";
import movieReducer from "../components/Search/movieSlice.js";

const store = configureStore({
  reducer: {
    likes: likesReducer,
    dislikes: dislikesReducer,
    movie: movieReducer,
  },
});

export default store;
