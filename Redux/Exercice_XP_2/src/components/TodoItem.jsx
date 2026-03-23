import { useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../features/todos/todoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "10px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "6px",
      }}
    >
      <span
        onClick={() => dispatch(toggleTodo(todo.id))}
        style={{
          cursor: "pointer",
          textDecoration: todo.completed ? "line-through" : "none",
          color: todo.completed ? "gray" : "black",
          flex: 1,
        }}
      >
        {todo.text}
      </span>

      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        style={{ marginLeft: "10px", padding: "6px 10px" }}
      >
        Remove
      </button>
    </li>
  );
}

export default TodoItem;