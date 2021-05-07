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
    removeLike(state, action) {
      return state.filter((id) => id !== action.payload);
    },
  },
});

export const { addLike, removeLike } = likesSlice.actions;
export default likesSlice.reducer;
