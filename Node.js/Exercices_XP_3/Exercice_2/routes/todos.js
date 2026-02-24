const express = require("express");
const router = express.Router();

// Sample in-memory database for storing to-do items
let todos = [
  { id: 1, title: "Learn Express Router", completed: false },
  { id: 2, title: "Build a CRUD API", completed: false },
];

// Helper: get next ID
function getNextId() {
  return todos.length ? Math.max(...todos.map((t) => t.id)) + 1 : 1;
}

// Get all to-do items
router.get("/", (req, res) => {
  res.status(200).json(todos);
});

// Add a new to-do item
router.post("/", (req, res) => {
  const { title, completed } = req.body;

  if (!title) {
    return res.status(400).json({ message: "title is required" });
  }

  const newTodo = {
    id: getNextId(),
    title: String(title),
    completed: completed === true, // default false unless explicitly true
  };

  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a to-do item by ID
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const { title, completed } = req.body;

  const todo = todos.find((t) => t.id === id);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  // Update only fields provided
  if (title !== undefined) todo.title = String(title);
  if (completed !== undefined) todo.completed = Boolean(completed);

  res.status(200).json(todo);
});

// Delete a to-do item by ID
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = todos.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  const deleted = todos.splice(index, 1)[0];
  res.status(200).json({ message: "Todo deleted", deleted });
});

module.exports = router;