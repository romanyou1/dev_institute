const express = require("express");
const bcrypt = require("bcrypt");
const fs = require("fs/promises");
const path = require("path");

const router = express.Router();
const SALT_ROUNDS = 10;
const USERS_FILE = path.join(__dirname, "..", "data", "users.json");

async function readUsers() {
  try {
    const fileContent = await fs.readFile(USERS_FILE, "utf-8");
    const parsed = JSON.parse(fileContent);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error.code === "ENOENT") {
      return [];
    }
    throw new Error("Failed to read users file");
  }
}

async function writeUsers(users) {
  try {
    await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2));
  } catch (error) {
    throw new Error("Failed to write users file");
  }
}

function sanitizeUser(user) {
  if (!user) return null;
  const { passwordHash, ...safeUser } = user;
  return safeUser;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

router.post("/register", async (req, res) => {
  const name = req.body?.name?.trim();
  const lastName = req.body?.lastName?.trim();
  const email = req.body?.email?.trim();
  const username = req.body?.username?.trim();
  const password = req.body?.password;

  if (!name || !lastName || !email || !username || !password) {
    return res.status(400).json({
      message:
        "Validation error: name, lastName, email, username and password are required",
    });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: "Validation error: invalid email" });
  }

  try {
    const users = await readUsers();
    const usernameExists = users.some(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    );

    if (usernameExists) {
      return res.status(409).json({ message: "Username already exists" });
    }

    const passwordAlreadyUsed = await Promise.all(
      users.map((user) => bcrypt.compare(password, user.passwordHash))
    ).then((matches) => matches.some(Boolean));

    if (passwordAlreadyUsed) {
      return res.status(409).json({ message: "Password already exists" });
    }

    const nextId =
      users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;
    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = {
      id: nextId,
      name,
      lastName,
      email,
      username,
      passwordHash,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    await writeUsers(users);

    return res.status(201).json({
      message: "Hello Your account is now created!",
      user: sanitizeUser(newUser),
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error while registering user" });
  }
});

router.post("/login", async (req, res) => {
  const username = req.body?.username?.trim();
  const password = req.body?.password;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Validation error: username and password are required" });
  }

  try {
    const users = await readUsers();
    const user = users.find(
      (storedUser) =>
        storedUser.username.toLowerCase() === username.toLowerCase()
    );

    if (!user) {
      return res.status(404).json({ message: "Username is not registered" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    return res.status(200).json({
      message: `Hi ${user.username} welcome back again!`,
      user: sanitizeUser(user),
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error while logging in" });
  }
});

router.get("/users", async (_req, res) => {
  try {
    const users = await readUsers();
    return res.status(200).json(users.map(sanitizeUser));
  } catch (error) {
    return res.status(500).json({ message: "Server error while reading users" });
  }
});

router.get("/users/:id", async (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ message: "Validation error: invalid user id" });
  }

  try {
    const users = await readUsers();
    const user = users.find((storedUser) => storedUser.id === id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json(sanitizeUser(user));
  } catch (error) {
    return res.status(500).json({ message: "Server error while reading user" });
  }
});

router.put("/users/:id", async (req, res) => {
  const id = Number.parseInt(req.params.id, 10);
  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({ message: "Validation error: invalid user id" });
  }

  const name = req.body?.name?.trim();
  const lastName = req.body?.lastName?.trim();
  const email = req.body?.email?.trim();
  const username = req.body?.username?.trim();
  const password = req.body?.password;

  if (!name && !lastName && !email && !username && !password) {
    return res.status(400).json({
      message:
        "Validation error: provide at least one field (name, lastName, email, username, password)",
    });
  }

  try {
    const users = await readUsers();
    const userIndex = users.findIndex((storedUser) => storedUser.id === id);

    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found" });
    }

    if (email && !isValidEmail(email)) {
      return res.status(400).json({ message: "Validation error: invalid email" });
    }

    if (username) {
      const duplicateUsername = users.some(
        (storedUser) =>
          storedUser.id !== id &&
          storedUser.username.toLowerCase() === username.toLowerCase()
      );

      if (duplicateUsername) {
        return res.status(409).json({ message: "Username already exists" });
      }
    }

    if (password) {
      const passwordAlreadyUsed = await Promise.all(
        users
          .filter((storedUser) => storedUser.id !== id)
          .map((storedUser) => bcrypt.compare(password, storedUser.passwordHash))
      ).then((matches) => matches.some(Boolean));

      if (passwordAlreadyUsed) {
        return res.status(409).json({ message: "Password already exists" });
      }
    }

    const updatedUser = {
      ...users[userIndex],
      ...(name ? { name } : {}),
      ...(lastName ? { lastName } : {}),
      ...(email ? { email } : {}),
      ...(username ? { username } : {}),
      ...(password
        ? { passwordHash: await bcrypt.hash(password, SALT_ROUNDS) }
        : {}),
      updatedAt: new Date().toISOString(),
    };

    users[userIndex] = updatedUser;
    await writeUsers(users);

    return res.status(200).json({
      message: "User updated successfully",
      user: sanitizeUser(updatedUser),
    });
  } catch (error) {
    return res.status(500).json({ message: "Server error while updating user" });
  }
});

module.exports = router;
