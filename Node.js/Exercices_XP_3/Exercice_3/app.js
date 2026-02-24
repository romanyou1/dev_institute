// Exercice 3

const express = require("express");
const booksRouter = require("./routes/books");

const app = express();
const PORT = 3000;

// Parse JSON request bodies
app.use(express.json());

// Mount router
app.use("/books", booksRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`✅ Books API running on http://localhost:${PORT}`);
});