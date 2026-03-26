const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const users = require("../data/users");

const router = express.Router();

const ACCESS_TOKEN_SECRET =
  process.env.ACCESS_TOKEN_SECRET || "your_access_token_secret";
const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "your_refresh_token_secret";

let refreshTokens = [];

function generateAccessToken(user) {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    ACCESS_TOKEN_SECRET,
    { expiresIn: "1h" }
  );
}

function generateRefreshToken(user) {
  return jwt.sign(
    {
      id: user.id,
      username: user.username,
    },
    REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );
}

function getCookieOptions(maxAge) {
  return {
    httpOnly: true,
    secure: false, // change to true in production with HTTPS
    sameSite: "strict",
    maxAge,
  };
}

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password are required",
      });
    }

    if (typeof username !== "string" || username.trim().length < 3) {
      return res.status(400).json({
        message: "Username must be at least 3 characters long",
      });
    }

    if (typeof password !== "string" || password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters long",
      });
    }

    const normalizedUsername = username.trim();

    const existingUser = users.find(
      (user) => user.username.toLowerCase() === normalizedUsername.toLowerCase()
    );

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      id: users.length + 1,
      username: normalizedUsername,
      password: hashedPassword,
    };

    users.push(newUser);

    const accessToken = generateAccessToken(newUser);
    const refreshToken = generateRefreshToken(newUser);

    refreshTokens.push(refreshToken);

    res.cookie("token", accessToken, getCookieOptions(60 * 60 * 1000));
    res.cookie(
      "refreshToken",
      refreshToken,
      getCookieOptions(7 * 24 * 60 * 60 * 1000)
    );

    return res.status(201).json({
      message: "User registered successfully",
      accessToken,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password are required",
      });
    }

    const normalizedUsername = String(username).trim();

    const user = users.find(
      (item) => item.username.toLowerCase() === normalizedUsername.toLowerCase()
    );

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    refreshTokens.push(refreshToken);

    res.cookie("token", accessToken, getCookieOptions(60 * 60 * 1000));
    res.cookie(
      "refreshToken",
      refreshToken,
      getCookieOptions(7 * 24 * 60 * 60 * 1000)
    );

    return res.status(200).json({
      message: "Login successful",
      accessToken,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

// REFRESH
router.post("/refresh", (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      message: "Refresh token missing",
    });
  }

  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json({
      message: "Refresh token is invalid or revoked",
    });
  }

  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        message: "Invalid refresh token",
      });
    }

    const newAccessToken = generateAccessToken({
      id: user.id,
      username: user.username,
    });

    res.cookie("token", newAccessToken, getCookieOptions(60 * 60 * 1000));

    return res.status(200).json({
      message: "Access token refreshed",
      accessToken: newAccessToken,
    });
  });
});

// LOGOUT
router.post("/logout", (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (refreshToken) {
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  }

  res.clearCookie("token");
  res.clearCookie("refreshToken");

  return res.status(200).json({
    message: "Logged out successfully",
  });
});

module.exports = router;