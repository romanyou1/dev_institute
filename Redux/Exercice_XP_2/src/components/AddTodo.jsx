import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedText = text.trim();
    if (!trimmedText) return;

    dispatch(addTodo(trimmedText));
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter a todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", width: "250px", marginRight: "10px" }}
      />
      <button type="submit" style={{ padding: "8px 12px" }}>
        Add
      </button>
    </form>
  );
}

export default AddTodo;