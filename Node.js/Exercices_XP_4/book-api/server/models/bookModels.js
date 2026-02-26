// In-memory "table" of books
let books = [
  { id: 1, title: "1984", author: "George Orwell", publishedYear: 1949 },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", publishedYear: 1937 },
];

function getAllBooks() {
  return books;
}

function getBookById(id) {
  return books.find((b) => b.id === id) || null;
}

function createBook({ title, author, publishedYear }) {
  const nextId = books.length ? Math.max(...books.map((b) => b.id)) + 1 : 1;
  const newBook = { id: nextId, title, author, publishedYear };
  books.push(newBook);
  return newBook;
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
};