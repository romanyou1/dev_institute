const express = require("express");
const bookRoutes = require("./server/routes/bookRoutes");

const app = express();

// Parse JSON bodies
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);

// Invalid routes (404)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Server errors (500)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Server error" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Book API server running on port ${PORT}`);
});