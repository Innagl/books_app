import { createSlice } from "@reduxjs/toolkit";

export const booksSlice = createSlice({
  name: "books",
  initialState: {
    booksFounded: []
  },
  reducers: {
    setBooksFounded: (state, action) => {
      state.booksFounded = action.payload;
    },
    clearBooksFounded: (state) => {
      state.booksFounded = [];
    }
  }
});

export const { setBooksFounded, clearBooksFounded } = booksSlice.actions;

export const getBooksFounded = (state) => state.books.booksFounded;

export default booksSlice.reducer;
