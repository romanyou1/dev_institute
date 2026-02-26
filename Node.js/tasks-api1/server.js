const express = require("express");
const tasksRouter = require("./routes/tasks");

const app = express();

// Parse JSON bodies
app.use(express.json());

// Routes
app.use("/tasks", tasksRouter);

// 404 fallback for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Central error handler
app.use((err, req, res, next) => {
  // If a route called next(err), it lands here
  console.error(err);
  const status = err.statusCode || 500;
  res.status(status).json({
    error: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});