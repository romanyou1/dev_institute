const express = require("express");
const { listUsers, getUser, updateUser } = require("../controllers/userController");

const router = express.Router();

router.get("/users", listUsers);
router.get("/users/:id", getUser);
router.put("/users/:id", updateUser);

module.exports = router;