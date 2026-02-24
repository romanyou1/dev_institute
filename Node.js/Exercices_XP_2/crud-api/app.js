const express = require("express");
const { fetchPosts } = require("./data/dataService");

const app = express();
const PORT = 5000;

// Endpoint that fetches posts from JSONPlaceholder and returns them
app.get("/api/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    console.log(`Retrieved ${posts.length} posts and sent response.`);
    res.status(200).json(posts);
  } catch (err) {
    console.error("Error fetching posts:", err.message);
    res.status(500).json({ message: "Failed to fetch posts" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});