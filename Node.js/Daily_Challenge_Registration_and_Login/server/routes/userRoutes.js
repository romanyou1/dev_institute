const express = require("express");
const {
  registerUser,
  loginUser,
  fetchAllUsers,
  fetchUserById,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/users", fetchAllUsers);
router.get("/users/:id", fetchUserById);
router.put("/users/:id", updateUser);

module.exports = router;