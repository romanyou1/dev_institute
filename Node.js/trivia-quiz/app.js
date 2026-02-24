const express = require("express");
const quizRouter = require("./routes/quiz");

const app = express();
const PORT = 3000;

// Parse JSON + form bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount router
app.use("/", quizRouter);

// 404
app.use((req, res) => {
  res.status(404).send("Route not found");
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).send("Internal server error");
});

app.listen(PORT, () => {
  console.log(`Trivia quiz running at http://localhost:${PORT}`);
});