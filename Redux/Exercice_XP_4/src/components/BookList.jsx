import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectBooks,
  selectHorrorBooks,
  selectFantasyBooks,
  selectScienceFictionBooks,
} from "../features/books/selectors";

const BookList = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const allBooks = useSelector(selectBooks);
  const horrorBooks = useSelector(selectHorrorBooks);
  const fantasyBooks = useSelector(selectFantasyBooks);
  const scienceFictionBooks = useSelector(selectScienceFictionBooks);

  let displayedBooks = allBooks;

  if (selectedGenre === "Horror") {
    displayedBooks = horrorBooks;
  } else if (selectedGenre === "Fantasy") {
    displayedBooks = fantasyBooks;
  } else if (selectedGenre === "Science Fiction") {
    displayedBooks = scienceFictionBooks;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Book Inventory</h2>

      <div style={{ marginBottom: "16px" }}>
        <button onClick={() => setSelectedGenre("All")}>All</button>{" "}
        <button onClick={() => setSelectedGenre("Horror")}>Horror</button>{" "}
        <button onClick={() => setSelectedGenre("Fantasy")}>Fantasy</button>{" "}
        <button onClick={() => setSelectedGenre("Science Fiction")}>
          Science Fiction
        </button>
      </div>

      <h3>Showing: {selectedGenre}</h3>

      {displayedBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul>
          {displayedBooks.map((book) => (
            <li key={book.id} style={{ marginBottom: "10px" }}>
              <strong>{book.title}</strong> by {book.author} — {book.genre}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;