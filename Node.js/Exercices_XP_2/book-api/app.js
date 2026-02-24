// Exercice 2

const express = require("express");

// Create express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Basic in-memory data array
let books = [
  { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960 },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", publishedYear: 1925 }
];

// ==========================
// READ ALL BOOKS
// GET /api/books
// ==========================
app.get("/api/books", (req, res) => {
  res.status(200).json(books);
});

// ==========================
// READ SINGLE BOOK
// GET /api/books/:bookId
// ==========================
app.get("/api/books/:bookId", (req, res) => {
  const bookId = parseInt(req.params.bookId);

  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.status(200).json(book);
});

// ==========================
// CREATE BOOK
// POST /api/books
// ==========================
app.post("/api/books", (req, res) => {
  const { title, author, publishedYear } = req.body;

  // Basic validation
  if (!title || !author || !publishedYear) {
    return res.status(400).json({
      message: "Title, author, and publishedYear are required"
    });
  }

  const newBook = {
    id: books.length ? books[books.length - 1].id + 1 : 1,
    title,
    author,
    publishedYear
  };

  books.push(newBook);

  res.status(201).json(newBook);
});

// ==========================
// Start Server
// ==========================
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});