import { createSlice } from "@reduxjs/toolkit";

const initialState =
  typeof window !== "undefined"
    ? localStorage.getItem("dislikes") !== null
      ? JSON.parse(localStorage.getItem("dislikes"))
      : []
    : [];

const dislikesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    addDislike: {
      reducer: (state, action) => {
        state.push(action.payload);
        localStorage.setItem("dislikes", JSON.stringify(state));
      },
    },
    removeDislike(state, action) {
      return state.filter((id) => id !== action.payload);
    },
  },
});

export const { addDislike, removeDislike } = dislikesSlice.actions;
export default dislikesSlice.reducer;
