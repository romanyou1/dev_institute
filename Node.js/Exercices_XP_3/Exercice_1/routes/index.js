// routes/index.js

const express = require("express");
const router = express.Router();

// Homepage route
router.get("/", (req, res) => {
  res.send("Welcome to the Homepage!");
});

// About page route
router.get("/about", (req, res) => {
  res.send("About Us: This is a simple Express Router example.");
});

module.exports = router;