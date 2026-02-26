const db = require("../config/db");

async function getAllPosts() {
  const result = await db.query("SELECT id, title, content FROM posts ORDER BY id DESC");
  return result.rows;
}

async function getPostById(id) {
  const result = await db.query("SELECT id, title, content FROM posts WHERE id = $1", [id]);
  return result.rows[0] || null;
}

async function createPost({ title, content }) {
  const result = await db.query(
    "INSERT INTO posts (title, content) VALUES ($1, $2) RETURNING id, title, content",
    [title, content]
  );
  return result.rows[0];
}

async function updatePost(id, { title, content }) {
  const result = await db.query(
    "UPDATE posts SET title = $1, content = $2, updated_at = NOW() WHERE id = $3 RETURNING id, title, content",
    [title, content, id]
  );
  return result.rows[0] || null;
}

async function deletePost(id) {
  const result = await db.query("DELETE FROM posts WHERE id = $1 RETURNING id", [id]);
  return result.rows[0] || null;
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};