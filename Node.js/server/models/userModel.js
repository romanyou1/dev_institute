const { pool } = require("../config/db");

async function getAllUsers() {
  const { rows } = await pool.query(
    `SELECT id, email, username, first_name, last_name FROM users ORDER BY id ASC`
  );
  return rows;
}

async function getUserById(id) {
  const { rows } = await pool.query(
    `SELECT id, email, username, first_name, last_name FROM users WHERE id = $1`,
    [id]
  );
  return rows[0] || null;
}

async function updateUserById(id, { email, username, first_name, last_name }) {
  // Partial update with COALESCE
  const { rows } = await pool.query(
    `
    UPDATE users
    SET
      email = COALESCE($2, email),
      username = COALESCE($3, username),
      first_name = COALESCE($4, first_name),
      last_name = COALESCE($5, last_name)
    WHERE id = $1
    RETURNING id, email, username, first_name, last_name
    `,
    [id, email ?? null, username ?? null, first_name ?? null, last_name ?? null]
  );
  return rows[0] || null;
}

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
};