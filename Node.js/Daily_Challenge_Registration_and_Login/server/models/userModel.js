const pool = require("../config/db");

const createUserWithPassword = async ({
  email,
  username,
  first_name,
  last_name,
  hashedPassword,
}) => {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const userInsertQuery = `
      INSERT INTO users (email, username, first_name, last_name)
      VALUES ($1, $2, $3, $4)
      RETURNING id, email, username, first_name, last_name
    `;

    const userResult = await client.query(userInsertQuery, [
      email,
      username,
      first_name,
      last_name,
    ]);

    const passwordInsertQuery = `
      INSERT INTO hashpwd (username, password)
      VALUES ($1, $2)
      RETURNING id, username
    `;

    await client.query(passwordInsertQuery, [username, hashedPassword]);

    await client.query("COMMIT");
    return userResult.rows[0];
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
  }
};

const findUserByUsername = async (username) => {
  const query = `
    SELECT u.id, u.email, u.username, u.first_name, u.last_name, h.password
    FROM users u
    JOIN hashpwd h ON u.username = h.username
    WHERE u.username = $1
  `;
  const result = await pool.query(query, [username]);
  return result.rows[0];
};

const getAllUsers = async () => {
  const query = `
    SELECT id, email, username, first_name, last_name
    FROM users
    ORDER BY id ASC
  `;
  const result = await pool.query(query);
  return result.rows;
};

const getUserById = async (id) => {
  const query = `
    SELECT id, email, username, first_name, last_name
    FROM users
    WHERE id = $1
  `;
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

const updateUserById = async (id, { email, username, first_name, last_name }) => {
  const query = `
    UPDATE users
    SET email = $1,
        username = $2,
        first_name = $3,
        last_name = $4
    WHERE id = $5
    RETURNING id, email, username, first_name, last_name
  `;
  const result = await pool.query(query, [
    email,
    username,
    first_name,
    last_name,
    id,
  ]);
  return result.rows[0];
};

module.exports = {
  createUserWithPassword,
  findUserByUsername,
  getAllUsers,
  getUserById,
  updateUserById,
};