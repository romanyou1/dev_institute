const Book = require("../models/bookModel");

function isPositiveInt(value) {
  const n = Number(value);
  return Number.isInteger(n) && n > 0;
}

// GET /api/books
exports.readAll = (req, res, next) => {
  try {
    const books = Book.getAllBooks();
    res.status(200).json(books);
  } catch (err) {
    next(err);
  }
};

// GET /api/books/:bookId
exports.readOne = (req, res, next) => {
  try {
    const { bookId } = req.params;

    if (!isPositiveInt(bookId)) {
      return res.status(400).json({ message: "Invalid bookId" });
    }

    const book = Book.getBookById(Number(bookId));
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (err) {
    next(err);
  }
};

// POST /api/books
exports.create = (req, res, next) => {
  try {
    const { title, author, publishedYear } = req.body || {};

    if (!title || !author || publishedYear === undefined) {
      return res.status(400).json({
        message: "title, author, and publishedYear are required",
      });
    }

    const yearNum = Number(publishedYear);
    if (!Number.isInteger(yearNum)) {
      return res.status(400).json({ message: "publishedYear must be an integer" });
    }

    const newBook = Book.createBook({ title, author, publishedYear: yearNum });
    res.status(201).json(newBook);
  } catch (err) {
    next(err);
  }
};