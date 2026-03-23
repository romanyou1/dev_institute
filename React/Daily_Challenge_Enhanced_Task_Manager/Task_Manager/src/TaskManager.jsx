import { useContext, useRef, useState } from "react";
import { TaskContext } from "./TaskContext";

function TaskManager() {
  const { state, dispatch } = useContext(TaskContext);
  const inputRef = useRef(null);
  const editRef = useRef(null);

  const [editingId, setEditingId] = useState(null);

  const handleAddTask = () => {
    const text = inputRef.current.value.trim();

    if (!text) return;

    dispatch({
      type: "ADD_TASK",
      payload: text,
    });

    inputRef.current.value = "";
  };

  const handleEditStart = (task) => {
    setEditingId(task.id);

    setTimeout(() => {
      if (editRef.current) {
        editRef.current.value = task.text;
        editRef.current.focus();
      }
    }, 0);
  };

  const handleSaveEdit = (id) => {
    const updatedText = editRef.current.value.trim();

    if (!updatedText) return;

    dispatch({
      type: "EDIT_TASK",
      payload: { id, text: updatedText },
    });

    setEditingId(null);
  };

  const filteredTasks = state.tasks.filter((task) => {
    if (state.filter === "completed") return task.completed;
    if (state.filter === "active") return !task.completed;
    return true;
  });

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Task Manager</h2>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <input ref={inputRef} type="text" placeholder="Enter a new task" />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => dispatch({ type: "SET_FILTER", payload: "all" })}>
          All
        </button>{" "}
        <button onClick={() => dispatch({ type: "SET_FILTER", payload: "active" })}>
          Active
        </button>{" "}
        <button
          onClick={() => dispatch({ type: "SET_FILTER", payload: "completed" })}
        >
          Completed
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() =>
                dispatch({ type: "TOGGLE_TASK", payload: task.id })
              }
            />

            {editingId === task.id ? (
              <>
                <input ref={editRef} type="text" />
                <button onClick={() => handleSaveEdit(task.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span
                  style={{
                    flex: 1,
                    textDecoration: task.completed ? "line-through" : "none",
                    cursor: "pointer",
                  }}
                >
                  {task.text}
                </span>
                <button onClick={() => handleEditStart(task)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;