import { createSlice } from "@reduxjs/toolkit";

const initialState =
  typeof window !== "undefined"
    ? localStorage.getItem("dislikes") !== null
      ? JSON.parse(localStorage.getItem("dislikes"))
      : []
    : [];

const dislikesSlice = createSlice({
  name: "dislikes",
  initialState,
  reducers: {
    addDislike: {
      reducer: (state, action) => {
        state.push(action.payload);
        localStorage.setItem("dislikes", JSON.stringify(state));
      },
    },
    removeDislike: {
      reducer: (state, action) => {
        const items = state.filter((item) => item.id != action.payload.id);
        localStorage.setItem("dislikes", JSON.stringify(items));
        return items;
      },
    },
  },
});

export const { addDislike, removeDislike } = dislikesSlice.actions;
export default dislikesSlice.reducer;
