import React, { useState } from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";

const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const REMOVE_TODO = "REMOVE_TODO";

const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    text,
  },
});

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});

const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

const initialState = {
  todos: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false,
          },
        ],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
}

const store = createStore(todoReducer);

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedText = text.trim();

    if (!trimmedText) return;

    addTodo(trimmedText);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Add a new todo"
        style={styles.input}
      />
      <button type="submit" style={styles.addButton}>
        Add
      </button>
    </form>
  );
}

const ConnectedTodoInput = connect(null, { addTodo })(TodoInput);

function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <div style={styles.todoItem}>
      <label style={styles.todoLabel}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span
          style={{
            ...styles.todoText,
            textDecoration: todo.completed ? "line-through" : "none",
            opacity: todo.completed ? 0.6 : 1,
          }}
        >
          {todo.text}
        </span>
      </label>

      <button
        onClick={() => removeTodo(todo.id)}
        style={styles.removeButton}
      >
        Remove
      </button>
    </div>
  );
}

const ConnectedTodoItem = connect(null, { toggleTodo, removeTodo })(TodoItem);

function TodoList({ todos }) {
  if (todos.length === 0) {
    return <p style={styles.emptyState}>No todos yet.</p>;
  }

  return (
    <div style={styles.list}>
      {todos.map((todo) => (
        <ConnectedTodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const ConnectedTodoList = connect(mapStateToProps)(TodoList);

function TodoApp() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Todo List With React Redux</h1>
        <p style={styles.subtitle}>
          Add, complete, and remove tasks with Redux state management.
        </p>

        <ConnectedTodoInput />
        <ConnectedTodoList />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f5f7fb",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    maxWidth: "640px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "32px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
  },
  title: {
    margin: "0 0 8px",
    fontSize: "32px",
  },
  subtitle: {
    margin: "0 0 24px",
    color: "#555",
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "24px",
  },
  input: {
    flex: 1,
    padding: "12px 14px",
    border: "1px solid #d0d7de",
    borderRadius: "10px",
    fontSize: "16px",
  },
  addButton: {
    padding: "12px 18px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#111827",
    color: "#ffffff",
    cursor: "pointer",
    fontSize: "15px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  todoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 16px",
    border: "1px solid #e5e7eb",
    borderRadius: "12px",
    backgroundColor: "#fafafa",
  },
  todoLabel: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flex: 1,
  },
  todoText: {
    fontSize: "16px",
    color: "#111827",
  },
  removeButton: {
    padding: "8px 12px",
    border: "1px solid #f1b5b5",
    borderRadius: "8px",
    backgroundColor: "#fff5f5",
    color: "#b42318",
    cursor: "pointer",
  },
  emptyState: {
    color: "#6b7280",
    textAlign: "center",
    padding: "20px 0",
  },
};