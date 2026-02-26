const express = require("express");
const path = require("path");
const fs = require("fs/promises");
const crypto = require("crypto");

const router = express.Router();

const DATA_FILE = path.join(__dirname, "..", "tasks.json");

/**
 * Helpers
 */
async function readTasksFile() {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) {
      const err = new Error("tasks.json must contain a JSON array");
      err.statusCode = 500;
      throw err;
    }
    return data;
  } catch (err) {
    // File missing / invalid JSON / permission errors etc.
    if (err.code === "ENOENT") {
      const e = new Error("Data file not found. Create tasks.json with []");
      e.statusCode = 500;
      throw e;
    }
    if (err instanceof SyntaxError) {
      const e = new Error("Data file contains invalid JSON");
      e.statusCode = 500;
      throw e;
    }
    throw err;
  }
}

// Naive but effective write (good for small demos). For multi-user production,
// you’d want a DB or locking/queueing.
async function writeTasksFile(tasks) {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(tasks, null, 2), "utf8");
  } catch (err) {
    const e = new Error("Failed to write data file");
    e.statusCode = 500;
    throw e;
  }
}

function isNonEmptyString(v) {
  return typeof v === "string" && v.trim().length > 0;
}

function validateTaskPayload(body, { partial = false } = {}) {
  // Define what a task looks like
  // We'll require: title (string)
  // Optional: completed (boolean), description (string)
  const errors = [];

  if (!partial) {
    if (!isNonEmptyString(body.title)) errors.push("title is required (non-empty string)");
  } else {
    // For PUT we can support partial updates if you want; but requirement says "necessary data"
    // We'll treat PUT as requiring at least one recognized field.
    const allowedKeys = ["title", "description", "completed"];
    const hasAnyAllowed = allowedKeys.some((k) => Object.prototype.hasOwnProperty.call(body, k));
    if (!hasAnyAllowed) errors.push("Provide at least one of: title, description, completed");
  }

  if (Object.prototype.hasOwnProperty.call(body, "title") && !isNonEmptyString(body.title)) {
    errors.push("title must be a non-empty string");
  }
  if (Object.prototype.hasOwnProperty.call(body, "description") && typeof body.description !== "string") {
    errors.push("description must be a string");
  }
  if (Object.prototype.hasOwnProperty.call(body, "completed") && typeof body.completed !== "boolean") {
    errors.push("completed must be a boolean");
  }

  return errors;
}

/**
 * Routes
 */

// GET /tasks - list all tasks
router.get("/", async (req, res, next) => {
  try {
    const tasks = await readTasksFile();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

// GET /tasks/:id - get task by id
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const tasks = await readTasksFile();
    const task = tasks.find((t) => t.id === id);

    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(task);
  } catch (err) {
    next(err);
  }
});

// POST /tasks - create task
router.post("/", async (req, res, next) => {
  try {
    const errors = validateTaskPayload(req.body, { partial: false });
    if (errors.length) {
      return res.status(400).json({ error: "Validation error", details: errors });
    }

    const tasks = await readTasksFile();

    const newTask = {
      id: crypto.randomUUID(),
      title: req.body.title.trim(),
      description: typeof req.body.description === "string" ? req.body.description : "",
      completed: typeof req.body.completed === "boolean" ? req.body.completed : false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    tasks.push(newTask);
    await writeTasksFile(tasks);

    res.status(201).json(newTask);
  } catch (err) {
    next(err);
  }
});

// PUT /tasks/:id - update task by id
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const errors = validateTaskPayload(req.body, { partial: true });
    if (errors.length) {
      return res.status(400).json({ error: "Validation error", details: errors });
    }

    const tasks = await readTasksFile();
    const idx = tasks.findIndex((t) => t.id === id);

    if (idx === -1) {
      return res.status(404).json({ error: "Task not found" });
    }

    const existing = tasks[idx];

    // Apply updates only if provided
    const updated = {
      ...existing,
      ...(Object.prototype.hasOwnProperty.call(req.body, "title")
        ? { title: req.body.title.trim() }
        : {}),
      ...(Object.prototype.hasOwnProperty.call(req.body, "description")
        ? { description: req.body.description }
        : {}),
      ...(Object.prototype.hasOwnProperty.call(req.body, "completed")
        ? { completed: req.body.completed }
        : {}),
      updatedAt: new Date().toISOString(),
    };

    tasks[idx] = updated;
    await writeTasksFile(tasks);

    res.json(updated);
  } catch (err) {
    next(err);
  }
});

// DELETE /tasks/:id - delete task by id
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const tasks = await readTasksFile();

    const idx = tasks.findIndex((t) => t.id === id);
    if (idx === -1) {
      return res.status(404).json({ error: "Task not found" });
    }

    const [removed] = tasks.splice(idx, 1);
    await writeTasksFile(tasks);

    res.json({ deleted: true, task: removed });
  } catch (err) {
    next(err);
  }
});

module.exports = router;