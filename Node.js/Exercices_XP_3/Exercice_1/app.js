// Exercice 1

const express = require("express");
const app = express();
const PORT = 3000;

// Import router (we’ll create it next)
const mainRouter = require("./routes");

// Mount router
app.use("/", mainRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Go to index.js