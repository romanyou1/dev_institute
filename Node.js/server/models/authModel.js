const { pool } = require("../config/db");

async function findUserByUsername(username) {
  const { rows } = await pool.query(
    `SELECT id, email, username, first_name, last_name FROM users WHERE username = $1`,
    [username]
  );
  return rows[0] || null;
}

async function getPasswordHashByUsername(username) {
  const { rows } = await pool.query(
    `SELECT username, password FROM hashpwd WHERE username = $1`,
    [username]
  );
  return rows[0] || null;
}

/**
 * Transaction: insert into users AND hashpwd atomically
 * Returns inserted user (without password).
 */
async function createUserWithPasswordTx(userData, hashedPassword) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");

    const insertUser = await client.query(
      `
      INSERT INTO users (email, username, first_name, last_name)
      VALUES ($1, $2, $3, $4)
      RETURNING id, email, username, first_name, last_name
      `,
      [
        userData.email ?? null,
        userData.username,
        userData.first_name ?? null,
        userData.last_name ?? null,
      ]
    );

    await client.query(
      `
      INSERT INTO hashpwd (username, password)
      VALUES ($1, $2)
      `,
      [userData.username, hashedPassword]
    );

    await client.query("COMMIT");
    return insertUser.rows[0];
  } catch (err) {
    await client.query("ROLLBACK");
    throw err;
  } finally {
    client.release();
  }
}

module.exports = {
  findUserByUsername,
  getPasswordHashByUsername,
  createUserWithPasswordTx,
};