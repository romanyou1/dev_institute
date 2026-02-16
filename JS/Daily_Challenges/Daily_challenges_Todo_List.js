// BONUS I: tasks as an array of objects
// Each task: { task_id, text, done }
const tasks = [];

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const listTasksDiv = document.querySelector(".listTasks");
const clearBtn = document.getElementById("clearBtn");

let nextId = 0;

// Create the DOM for one task
function createTaskElement(task) {
  const row = document.createElement("div");
  row.className = "task";
  row.dataset.taskId = String(task.task_id);
  if (task.done) row.classList.add("done");

  // X button (Font Awesome)
  const delBtn = document.createElement("button");
  delBtn.className = "deleteBtn";
  delBtn.type = "button";
  delBtn.setAttribute("aria-label", "Delete task");
  delBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  // checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.done;

  // label
  const label = document.createElement("label");
  label.textContent = task.text;

  row.appendChild(delBtn);
  row.appendChild(checkbox);
  row.appendChild(label);

  return row;
}

// Add task to array + DOM
function addTask(text) {
  const trimmed = text.trim();
  if (trimmed === "") return;

  const taskObj = {
    task_id: nextId++,
    text: trimmed,
    done: false,
  };

  tasks.push(taskObj);
  listTasksDiv.appendChild(createTaskElement(taskObj));
}

// BONUS I: doneTask — toggle done in array + DOM
function doneTask(taskId, isDone) {
  const id = Number(taskId);
  const task = tasks.find((t) => t.task_id === id);
  if (!task) return;

  task.done = isDone;

  const row = listTasksDiv.querySelector(`.task[data-task-id="${taskId}"]`);
  if (row) row.classList.toggle("done", isDone);
}

// BONUS II: deleteTask — remove from array + DOM
function deleteTask(taskId) {
  const id = Number(taskId);
  const index = tasks.findIndex((t) => t.task_id === id);
  if (index === -1) return;

  tasks.splice(index, 1);

  const row = listTasksDiv.querySelector(`.task[data-task-id="${taskId}"]`);
  if (row) row.remove();
}

// Form submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = input.value;
  if (value.trim() === "") return;

  addTask(value);
  input.value = "";
  input.focus();
});

// Event delegation for checkbox + delete button
listTasksDiv.addEventListener("click", (event) => {
  const row = event.target.closest(".task");
  if (!row) return;

  const taskId = row.dataset.taskId;

  // Delete button
  const deleteBtn = event.target.closest(".deleteBtn");
  if (deleteBtn) {
    deleteTask(taskId);
    return;
  }
});

// Separate change handler for checkbox (cleaner)
listTasksDiv.addEventListener("change", (event) => {
  const row = event.target.closest(".task");
  if (!row) return;

  const taskId = row.dataset.taskId;

  if (event.target.matches('input[type="checkbox"]')) {
    doneTask(taskId, event.target.checked);
  }
});

// Clear all (optional but matches screenshot)
clearBtn.addEventListener("click", () => {
  tasks.length = 0;
  listTasksDiv.innerHTML = "";
});