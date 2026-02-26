const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/", postController.getAll);          // GET /posts
router.get("/:id", postController.getById);      // GET /posts/:id
router.post("/", postController.create);         // POST /posts
router.put("/:id", postController.update);       // PUT /posts/:id
router.delete("/:id", postController.remove);    // DELETE /posts/:id

module.exports = router;