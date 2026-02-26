const bcrypt = require("bcrypt");
const {
  findUserByUsername,
  getPasswordHashByUsername,
  createUserWithPasswordTx,
} = require("../models/authModel");

const SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS || 10);

async function register(req, res) {
  try {
    const { email, username, password, first_name, last_name } = req.body || {};

    if (!username || !password) {
      return res.status(400).json({ error: "username and password are required" });
    }

    const existing = await findUserByUsername(username);
    if (existing) {
      return res.status(409).json({ error: "username already exists" });
    }

    const hashed = await bcrypt.hash(password, SALT_ROUNDS);

    const createdUser = await createUserWithPasswordTx(
      { email, username, first_name, last_name },
      hashed
    );

    return res.status(201).json({
      message: "registered",
      user: createdUser,
    });
  } catch (err) {
    // Common case: unique constraint violation for email/username
    console.error("Register error:", err);
    return res.status(500).json({ error: "server error" });
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body || {};

    if (!username || !password) {
      return res.status(400).json({ error: "username and password are required" });
    }

    // Get stored hash from DB (hashpwd table)
    const record = await getPasswordHashByUsername(username);
    if (!record) {
      return res.status(401).json({ error: "invalid credentials" });
    }

    const ok = await bcrypt.compare(password, record.password);
    if (!ok) {
      return res.status(401).json({ error: "invalid credentials" });
    }

    // Optional: fetch user profile info
    const user = await findUserByUsername(username);

    return res.json({ message: "logged in", user });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ error: "server error" });
  }
}

module.exports = { register, login };