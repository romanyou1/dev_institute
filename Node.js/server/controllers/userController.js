const { getAllUsers, getUserById, updateUserById } = require("../models/userModel");

async function listUsers(req, res) {
  try {
    const users = await getAllUsers();
    return res.json(users);
  } catch (err) {
    console.error("List users error:", err);
    return res.status(500).json({ error: "server error" });
  }
}

async function getUser(req, res) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: "invalid id" });

    const user = await getUserById(id);
    if (!user) return res.status(404).json({ error: "user not found" });

    return res.json(user);
  } catch (err) {
    console.error("Get user error:", err);
    return res.status(500).json({ error: "server error" });
  }
}

async function updateUser(req, res) {
  try {
    const id = Number(req.params.id);
    if (!Number.isInteger(id)) return res.status(400).json({ error: "invalid id" });

    const updated = await updateUserById(id, req.body || {});
    if (!updated) return res.status(404).json({ error: "user not found" });

    return res.json({ message: "updated", user: updated });
  } catch (err) {
    console.error("Update user error:", err);
    return res.status(500).json({ error: "server error" });
  }
}

module.exports = { listUsers, getUser, updateUser };