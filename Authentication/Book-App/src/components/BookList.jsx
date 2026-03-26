import React from "react";
import BookCard from "./BookCard";

export default function BookList({ books }) {
  if (!books.length) {
    return <p className="message">No books found.</p>;
  }

  return (
    <div className="book-grid">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}