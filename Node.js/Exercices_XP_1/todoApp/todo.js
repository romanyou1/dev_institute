// Exercice 4

export class TodoList {
  constructor() {
    this.tasks = [];
  }

  // Add a new task
  addTask(taskDescription) {
    this.tasks.push({
      description: taskDescription,
      completed: false
    });
    console.log(`Task added: "${taskDescription}"`);
  }

  // Mark task as complete
  markComplete(taskDescription) {
    const task = this.tasks.find(
      (t) => t.description === taskDescription
    );

    if (task) {
      task.completed = true;
      console.log(`Task marked as complete: "${taskDescription}"`);
    } else {
      console.log(`Task not found: "${taskDescription}"`);
    }
  }

  // List all tasks
  listTasks() {
    console.log("\nTodo List:");
    this.tasks.forEach((task, index) => {
      const status = task.completed ? "Yes" : "No";
      console.log(`${index + 1}. ${task.description} ${status}`);
    });
  }
}

// Go to app.js