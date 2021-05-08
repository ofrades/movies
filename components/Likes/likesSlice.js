import { createSlice } from "@reduxjs/toolkit";

const initialState =
  typeof window !== "undefined"
    ? localStorage.getItem("likes") !== null
      ? JSON.parse(localStorage.getItem("likes"))
      : []
    : [];

const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    addLike: {
      reducer: (state, action) => {
        state.push(action.payload);
        localStorage.setItem("likes", JSON.stringify(state));
      },
    },
    removeLike: {
      reducer: (state, action) => {
        const items = state.filter((like) => like.id !== action.payload.id);
        localStorage.setItem("likes", JSON.stringify(items));
        return items;
      },
    },
  },
});

export const { addLike, removeLike } = likesSlice.actions;
export default likesSlice.reducer;
