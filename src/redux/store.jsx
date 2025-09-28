import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favoritesSlice.jsx';
import booksReducer from './booksSlice.jsx';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    books: booksReducer,
  },
});

export default store;
