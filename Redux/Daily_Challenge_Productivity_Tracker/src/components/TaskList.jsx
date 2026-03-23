import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  editTask,
  toggleTaskCompleted,
  updateTaskProgress,
} from "../features/tasks/tasksSlice";
import { selectTasksByCategory } from "../features/tasks/selectors";

export default function TaskList({ selectedCategory }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) =>
    selectTasksByCategory(state, selectedCategory)
  );

  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  const handleEditStart = useCallback((task) => {
    setEditingTaskId(task.id);
    setEditedTitle(task.title);
  }, []);

  const handleEditSave = useCallback(() => {
    if (!editedTitle.trim()) return;
    dispatch(editTask({ id: editingTaskId, title: editedTitle }));
    setEditingTaskId(null);
    setEditedTitle("");
  }, [dispatch, editingTaskId, editedTitle]);

  const handleToggleComplete = useCallback(
    (taskId) => {
      dispatch(toggleTaskCompleted(taskId));
    },
    [dispatch]
  );

  const handleProgressChange = useCallback(
    (taskId, progress) => {
      dispatch(updateTaskProgress({ id: taskId, progress: Number(progress) }));
    },
    [dispatch]
  );

  return (
    <div>
      <h2>Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            {editingTaskId === task.id ? (
              <div>
                <input
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <button onClick={handleEditSave}>Save</button>
                <button onClick={() => setEditingTaskId(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <h3
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    marginBottom: "8px",
                  }}
                >
                  {task.title}
                </h3>

                <p>Progress: {task.progress}%</p>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={task.progress}
                  onChange={(e) =>
                    handleProgressChange(task.id, e.target.value)
                  }
                />

                <div style={{ marginTop: "10px" }}>
                  <button onClick={() => handleToggleComplete(task.id)}>
                    {task.completed ? "Mark Incomplete" : "Mark Complete"}
                  </button>

                  <button
                    onClick={() => handleEditStart(task)}
                    style={{ marginLeft: "8px" }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => dispatch(deleteTask(task.id))}
                    style={{ marginLeft: "8px" }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
}