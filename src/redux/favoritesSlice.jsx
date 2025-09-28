
import { createSlice } from "@reduxjs/toolkit";


export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        favoritesAllIBooks: []
    },

    reducers: {

        addedBookToFavorites: (state, action) => {
            const timeId = new Date().getTime()
            state.favoritesAllIBooks.push({
                id: timeId,
                book: action.payload.book,
                quantity: action.payload.quantity || 1,
                totalBooks: action.payload.quantity || 1
            })
        },

        removeBookFromFavorites: (state, action) => {
            state.favoritesAllIBooks = state.favoritesAllIBooks.filter(
                favoriteBook => favoriteBook.id !== action.payload.favoriteBookId
            )
        }
    }
})


export const getTotalBooks = state =>
    state.favorites.favoritesAllIBooks.reduce(
        (total, favoriteItem) => total + (favoriteItem.totalBooks || 0),
        0
    );


export const { addedBookToFavorites, removeBookFromFavorites } = favoritesSlice.actions;
export const getFavoritesBooks = state => state.favorites.favoritesAllIBooks;
export default favoritesSlice.reducer