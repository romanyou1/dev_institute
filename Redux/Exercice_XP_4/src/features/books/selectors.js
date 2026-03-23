import { createSelector } from "@reduxjs/toolkit";

// Base selector
const selectBooksState = (state) => state.books;

// All books
export const selectBooks = createSelector(
  [selectBooksState],
  (booksState) => booksState.books
);

// Horror books
export const selectHorrorBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === "Horror")
);

// Fantasy books
export const selectFantasyBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === "Fantasy")
);

// Science Fiction books
export const selectScienceFictionBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === "Science Fiction")
);