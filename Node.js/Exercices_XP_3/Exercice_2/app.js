// Exercice 2

const express = require("express");
const todosRouter = require("./routes/todos");

const app = express();
const PORT = 3000;

// Parse JSON request bodies
app.use(express.json());

// Mount router
app.use("/todos", todosRouter);

// 404 for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Basic error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`✅ To-Do API running on http://localhost:${PORT}`);
});