// Exercice 1

const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory "database"
let posts = [
  { id: 1, title: "Hello World", content: "My first blog post!" },
  { id: 2, title: "Second Post", content: "Learning Express is fun." },
];

// Helper: find post index by id
function findPostIndexById(id) {
  return posts.findIndex((p) => p.id === id);
}

// GET /posts - list all posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

// GET /posts/:id - get one post
app.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.json(post);
});

// POST /posts - create a new post
app.post("/posts", (req, res) => {
  const { title, content } = req.body;

  // Basic validation
  if (!title || !content) {
    return res.status(400).json({ error: "title and content are required" });
  }

  const nextId = posts.length ? Math.max(...posts.map((p) => p.id)) + 1 : 1;

  const newPost = {
    id: nextId,
    title,
    content,
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT /posts/:id - update a post (replace title/content)
app.put("/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "title and content are required" });
  }

  const idx = findPostIndexById(id);
  if (idx === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  posts[idx] = { id, title, content };
  res.json(posts[idx]);
});

// DELETE /posts/:id - delete a post
app.delete("/posts/:id", (req, res) => {
  const id = Number(req.params.id);

  const idx = findPostIndexById(id);
  if (idx === -1) {
    return res.status(404).json({ error: "Post not found" });
  }

  const deleted = posts.splice(idx, 1)[0];
  res.json({ message: "Post deleted", deleted });
});

// 404 handler for invalid routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Server error handler (must have 4 args)
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({ error: "Internal server error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Blog API running on http://localhost:${PORT}`);
});