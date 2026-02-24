import { TodoList } from "./todo.js";

const myTodoList = new TodoList();

// Add tasks
myTodoList.addTask("Study Node.js");
myTodoList.addTask("Go to the gym");
myTodoList.addTask("Buy groceries");

// Mark some tasks as complete
myTodoList.markComplete("Go to the gym");

// List all tasks
myTodoList.listTasks();