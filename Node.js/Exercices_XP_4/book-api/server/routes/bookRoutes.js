const express = require("express");
const router = express.Router();
const bookController = require("../controllers/bookController");

router.get("/", bookController.readAll);        // GET /api/books
router.get("/:bookId", bookController.readOne); // GET /api/books/:bookId
router.post("/", bookController.create);        // POST /api/books

module.exports = router;