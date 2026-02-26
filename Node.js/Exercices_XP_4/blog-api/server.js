require("dotenv").config();
const express = require("express");

const postRoutes = require("./server/routes/postRoutes");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/posts", postRoutes);

// Invalid route handler (404)
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Server error handler (500)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Server error" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Blog API listening on port ${PORT}`);
});