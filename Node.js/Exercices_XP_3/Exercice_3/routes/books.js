const express = require("express");
const router = express.Router();

// Sample in-memory database for storing books
let books = [
  { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960 },
];

// Helper: get next ID
function getNextId() {
  return books.length ? Math.max(...books.map((b) => b.id)) + 1 : 1;
}

// Get all books
router.get("/", (req, res) => {
  res.status(200).json(books);
});

// Add a new book
router.post("/", (req, res) => {
  const { title, author, publishedYear } = req.body;

  if (!title || !author || !publishedYear) {
    return res.status(400).json({
      message: "title, author, and publishedYear are required",
    });
  }

  const newBook = {
    id: getNextId(),
    title: String(title),
    author: String(author),
    publishedYear: Number(publishedYear),
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book by ID
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title, author, publishedYear } = req.body;

  const book = books.find((b) => b.id === id);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  // Update only fields provided
  if (title !== undefined) book.title = String(title);
  if (author !== undefined) book.author = String(author);
  if (publishedYear !== undefined) book.publishedYear = Number(publishedYear);

  res.status(200).json(book);
});

// Delete a book by ID
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = books.findIndex((b) => b.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  const deleted = books.splice(index, 1)[0];
  res.status(200).json({ message: "Book deleted", deleted });
});

module.exports = router;