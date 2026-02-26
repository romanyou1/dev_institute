const Post = require("../models/postModel");

function isPositiveInt(value) {
  const n = Number(value);
  return Number.isInteger(n) && n > 0;
}

exports.getAll = async (req, res, next) => {
  try {
    const posts = await Post.getAllPosts();
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isPositiveInt(id)) return res.status(400).json({ error: "Invalid id" });

    const post = await Post.getPostById(Number(id));
    if (!post) return res.status(404).json({ error: "Post not found" });

    res.json(post);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { title, content } = req.body || {};
    if (!title || !content) {
      return res.status(400).json({ error: "title and content are required" });
    }

    const newPost = await Post.createPost({ title, content });
    res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isPositiveInt(id)) return res.status(400).json({ error: "Invalid id" });

    const { title, content } = req.body || {};
    if (!title || !content) {
      return res.status(400).json({ error: "title and content are required" });
    }

    const updated = await Post.updatePost(Number(id), { title, content });
    if (!updated) return res.status(404).json({ error: "Post not found" });

    res.json(updated);
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!isPositiveInt(id)) return res.status(400).json({ error: "Invalid id" });

    const deleted = await Post.deletePost(Number(id));
    if (!deleted) return res.status(404).json({ error: "Post not found" });

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};