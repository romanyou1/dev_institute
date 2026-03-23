import React, { useMemo, useState } from "react";
import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

const todayString = new Date().toISOString().split("T")[0];

const plannerSlice = createSlice({
  name: "planner",
  initialState: {
    selectedDay: todayString,
    tasksByDay: {
      [todayString]: [
        {
          id: nanoid(),
          title: "Review priorities",
          description: "Plan the day and confirm top 3 tasks.",
          completed: false,
        },
        {
          id: nanoid(),
          title: "Team standup",
          description: "Share updates and blockers.",
          completed: true,
        },
      ],
    },
  },
  reducers: {
    selectDay: (state, action) => {
      state.selectedDay = action.payload;
      if (!state.tasksByDay[action.payload]) {
        state.tasksByDay[action.payload] = [];
      }
    },
    addTask: {
      reducer: (state, action) => {
        const { day, task } = action.payload;
        if (!state.tasksByDay[day]) {
          state.tasksByDay[day] = [];
        }
        state.tasksByDay[day].push(task);
      },
      prepare: ({ day, title, description }) => ({
        payload: {
          day,
          task: {
            id: nanoid(),
            title,
            description,
            completed: false,
          },
        },
      }),
    },
    editTask: (state, action) => {
      const { day, id, updates } = action.payload;
      const task = (state.tasksByDay[day] || []).find((item) => item.id === id);
      if (task) {
        Object.assign(task, updates);
      }
    },
    deleteTask: (state, action) => {
      const { day, id } = action.payload;
      state.tasksByDay[day] = (state.tasksByDay[day] || []).filter(
        (task) => task.id !== id
      );
    },
    toggleTask: (state, action) => {
      const { day, id } = action.payload;
      const task = (state.tasksByDay[day] || []).find((item) => item.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

const { selectDay, addTask, editTask, deleteTask, toggleTask } = plannerSlice.actions;

const store = configureStore({
  reducer: {
    planner: plannerSlice.reducer,
  },
});

function DatePicker() {
  const dispatch = useDispatch();
  const selectedDay = useSelector((state) => state.planner.selectedDay);

  return (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>Select a day</h2>
      <label htmlFor="day-picker" style={styles.label}>
        Choose date
      </label>
      <input
        id="day-picker"
        type="date"
        value={selectedDay}
        onChange={(e) => dispatch(selectDay(e.target.value))}
        style={styles.input}
      />
    </div>
  );
}

function AddTask() {
  const dispatch = useDispatch();
  const selectedDay = useSelector((state) => state.planner.selectedDay);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      return;
    }

    dispatch(
      addTask({
        day: selectedDay,
        title: title.trim(),
        description: description.trim(),
      })
    );

    setTitle("");
    setDescription("");
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.cardTitle}>Add task</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-title" style={styles.label}>
          Task title
        </label>
        <input
          id="task-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a task"
          style={styles.input}
        />

        <label htmlFor="task-description" style={styles.label}>
          Description
        </label>
        <textarea
          id="task-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add details"
          rows={4}
          style={styles.textarea}
        />

        <button type="submit" style={styles.primaryButton}>
          Add Task
        </button>
      </form>
    </div>
  );
}

function TaskItem({ task, day }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || "");

  const handleSave = () => {
    if (!title.trim()) {
      return;
    }

    dispatch(
      editTask({
        day,
        id: task.id,
        updates: {
          title: title.trim(),
          description: description.trim(),
        },
      })
    );

    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(task.title);
    setDescription(task.description || "");
    setIsEditing(false);
  };

  return (
    <div style={styles.taskCard}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            style={styles.textarea}
          />
          <div style={styles.buttonRow}>
            <button type="button" onClick={handleSave} style={styles.primaryButtonSmall}>
              Save
            </button>
            <button type="button" onClick={handleCancel} style={styles.secondaryButtonSmall}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div style={styles.taskHeader}>
            <div>
              <h3 style={styles.taskTitle}>{task.title}</h3>
              <p style={styles.taskDescription}>{task.description || "No description"}</p>
            </div>
            <span
              style={{
                ...styles.statusBadge,
                backgroundColor: task.completed ? "#dcfce7" : "#f3f4f6",
                color: task.completed ? "#166534" : "#374151",
              }}
            >
              {task.completed ? "Completed" : "Pending"}
            </span>
          </div>

          <div style={styles.buttonRow}>
            <button
              type="button"
              onClick={() => dispatch(toggleTask({ day, id: task.id }))}
              style={styles.secondaryButtonSmall}
            >
              {task.completed ? "Mark Pending" : "Mark Complete"}
            </button>
            <button type="button" onClick={() => setIsEditing(true)} style={styles.secondaryButtonSmall}>
              Edit
            </button>
            <button
              type="button"
              onClick={() => dispatch(deleteTask({ day, id: task.id }))}
              style={styles.deleteButtonSmall}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function TaskList() {
  const selectedDay = useSelector((state) => state.planner.selectedDay);
  const tasks = useSelector((state) => state.planner.tasksByDay[selectedDay] || []);

  const summary = useMemo(() => {
    const completed = tasks.filter((task) => task.completed).length;

    return {
      total: tasks.length,
      completed,
      pending: tasks.length - completed,
    };
  }, [tasks]);

  return (
    <div style={styles.card}>
      <div style={styles.summaryHeader}>
        <h2 style={styles.cardTitle}>Tasks for {selectedDay}</h2>
        <div style={styles.summaryRow}>
          <span style={styles.summaryBadge}>Total: {summary.total}</span>
          <span style={styles.summaryBadge}>Done: {summary.completed}</span>
          <span style={styles.summaryBadge}>Pending: {summary.pending}</span>
        </div>
      </div>

      {tasks.length === 0 ? (
        <div style={styles.emptyState}>No tasks for this day yet. Add your first task.</div>
      ) : (
        <div>
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} day={selectedDay} />
          ))}
        </div>
      )}
    </div>
  );
}

function PlannerApp() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.mainTitle}>Daily Planner</h1>
        <p style={styles.subtitle}>Manage tasks for specific days using React and Redux Toolkit.</p>

        <div style={styles.layout}>
          <div>
            <DatePicker />
            <AddTask />
          </div>
          <div>
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PlannerApp />
    </Provider>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f8fafc",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  mainTitle: {
    marginBottom: "8px",
    fontSize: "36px",
    color: "#0f172a",
  },
  subtitle: {
    marginBottom: "24px",
    color: "#475569",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "24px",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
    marginBottom: "24px",
  },
  cardTitle: {
    marginTop: 0,
    marginBottom: "16px",
    color: "#0f172a",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "600",
    color: "#334155",
  },
  input: {
    width: "100%",
    boxSizing: "border-box",
    padding: "10px 12px",
    marginBottom: "16px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    fontSize: "14px",
  },
  textarea: {
    width: "100%",
    boxSizing: "border-box",
    padding: "10px 12px",
    marginBottom: "16px",
    border: "1px solid #cbd5e1",
    borderRadius: "8px",
    fontSize: "14px",
    resize: "vertical",
  },
  primaryButton: {
    width: "100%",
    padding: "10px 16px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
  },
  primaryButtonSmall: {
    padding: "8px 12px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  secondaryButtonSmall: {
    padding: "8px 12px",
    backgroundColor: "#e2e8f0",
    color: "#0f172a",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  deleteButtonSmall: {
    padding: "8px 12px",
    backgroundColor: "#dc2626",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  taskCard: {
    border: "1px solid #e2e8f0",
    borderRadius: "10px",
    padding: "16px",
    marginBottom: "12px",
    backgroundColor: "#fff",
  },
  taskHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "12px",
    marginBottom: "12px",
  },
  taskTitle: {
    margin: "0 0 8px 0",
    color: "#0f172a",
  },
  taskDescription: {
    margin: 0,
    color: "#475569",
  },
  buttonRow: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  statusBadge: {
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "600",
    whiteSpace: "nowrap",
  },
  summaryHeader: {
    marginBottom: "16px",
  },
  summaryRow: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  summaryBadge: {
    backgroundColor: "#e2e8f0",
    color: "#0f172a",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "600",
  },
  emptyState: {
    padding: "24px",
    textAlign: "center",
    border: "1px dashed #cbd5e1",
    borderRadius: "10px",
    color: "#64748b",
  },
};

