import { useState } from "react";
import List from "./List";

type Book = {
  id: number;
  title: string;
  author: string;
};

const initialBooks: Book[] = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee" },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
];

function BookApp() {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const addBook = (): void => {
    const newBook: Book = {
      id: books.length + 1,
      title: `New Book ${books.length + 1}`,
      author: `Author ${books.length + 1}`,
    };

    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  return (
    <div>
      <h1>Book List</h1>

      <button onClick={addBook}>Add Book</button>

      <List
        items={books}
        renderItem={(book) => (
          <div>
            <strong>{book.title}</strong> by {book.author}
          </div>
        )}
      />
    </div>
  );
}

export default BookApp;