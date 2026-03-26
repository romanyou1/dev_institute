import React from "react";

export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <img
        src={book.image}
        alt={book.title}
        onError={(e) => {
          e.currentTarget.src =
            "https://via.placeholder.com/160x230?text=No+Cover";
        }}
      />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>
          <strong>Author:</strong> {book.author}
        </p>
        <p>
          <strong>Published:</strong> {book.publishedYear}
        </p>
      </div>
    </div>
  );
}