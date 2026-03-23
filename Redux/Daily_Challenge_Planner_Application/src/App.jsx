import React, { useMemo, useState } from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import {
  Calendar,
  Plus,
  Pencil,
  Trash2,
  CheckCircle2,
  Circle,
} from "lucide-react";

const SELECT_DAY = "SELECT_DAY";
const ADD_TASK = "ADD_TASK";
const EDIT_TASK = "EDIT_TASK";
const DELETE_TASK = "DELETE_TASK";
const TOGGLE_TASK = "TOGGLE_TASK";

const todayString = () => new Date().toISOString().slice(0, 10);
const createId = () => `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

const loadState = () => {
  try {
    const raw = localStorage.getItem("daily-planner-redux-state");
    if (!raw) {
      return {
        selectedDay: todayString(),
        tasksByDay: {
          [todayString()]: [
            {
              id: createId(),
              title: "Plan the day",
              description: "Review priorities and create a realistic schedule.",
              completed: false,
            },
          ],
        },
      };
    }

    const parsed = JSON.parse(raw);
    return {
      selectedDay: parsed.selectedDay || todayString(),
      tasksByDay: parsed.tasksByDay || {},
    };
  } catch {
    return {
      selectedDay: todayString(),
      tasksByDay: {},
    };
  }
};

const saveState = (state) => {
  try {
    localStorage.setItem("daily-planner-redux-state", JSON.stringify(state));
  } catch {
    // ignore
  }
};

const formatHumanDate = (value) => {
  try {
    return new Date(`${value}T00:00:00`).toLocaleDateString(undefined, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return value;
  }
};

const selectDay = (day) => ({
  type: SELECT_DAY,
  payload: { day },
});

const addTask = (day, task) => ({
  type: ADD_TASK,
  payload: { day, task },
});

const editTask = (day, taskId, updates) => ({
  type: EDIT_TASK,
  payload: { day, taskId, updates },
});

const deleteTask = (day, taskId) => ({
  type: DELETE_TASK,
  payload: { day, taskId },
});

const toggleTask = (day, taskId) => ({
  type: TOGGLE_TASK,
  payload: { day, taskId },
});

const initialState = loadState();

function plannerReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_DAY:
      return {
        ...state,
        selectedDay: action.payload.day,
      };

    case ADD_TASK: {
      const { day, task } = action.payload;
      const dayTasks = state.tasksByDay[day] || [];

      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [day]: [...dayTasks, task],
        },
      };
    }

    case EDIT_TASK: {
      const { day, taskId, updates } = action.payload;
      const dayTasks = state.tasksByDay[day] || [];

      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [day]: dayTasks.map((task) =>
            task.id === taskId ? { ...task, ...updates } : task
          ),
        },
      };
    }

    case DELETE_TASK: {
      const { day, taskId } = action.payload;
      const dayTasks = state.tasksByDay[day] || [];

      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [day]: dayTasks.filter((task) => task.id !== taskId),
        },
      };
    }

    case TOGGLE_TASK: {
      const { day, taskId } = action.payload;
      const dayTasks = state.tasksByDay[day] || [];

      return {
        ...state,
        tasksByDay: {
          ...state.tasksByDay,
          [day]: dayTasks.map((task) =>
            task.id === taskId
              ? { ...task, completed: !task.completed }
              : task
          ),
        },
      };
    }

    default:
      return state;
  }
}

const store = createStore(plannerReducer);
store.subscribe(() => saveState(store.getState()));

function DatePicker({ selectedDay, onSelectDay, taskCount }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.sectionTitle}>
        <Calendar size={18} />
        Pick a day
      </h2>

      <label style={styles.label}>Selected date</label>
      <input
        type="date"
        value={selectedDay}
        onChange={(e) => onSelectDay(e.target.value)}
        style={styles.input}
      />

      <div style={styles.infoBox}>
        <p style={styles.muted}>Viewing tasks for</p>
        <p style={styles.dateText}>{formatHumanDate(selectedDay)}</p>
        <p style={styles.badge}>{taskCount} task{taskCount === 1 ? "" : "s"}</p>
      </div>
    </div>
  );
}

function TaskForm({ initialValues, onSubmit, onCancel, submitLabel }) {
  const [title, setTitle] = useState(initialValues?.title || "");
  const [description, setDescription] = useState(initialValues?.description || "");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if (!trimmedTitle) {
      setError("Task title is required.");
      return;
    }

    if (trimmedTitle.length > 100) {
      setError("Task title must be 100 characters or fewer.");
      return;
    }

    if (trimmedDescription.length > 500) {
      setError("Description must be 500 characters or fewer.");
      return;
    }

    setError("");
    onSubmit({
      title: trimmedTitle,
      description: trimmedDescription,
    });

    if (!initialValues) {
      setTitle("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label style={styles.label}>Task title</label>
      <input
        type="text"
        placeholder="e.g. Review project roadmap"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />

      <label style={styles.label}>Description</label>
      <textarea
        placeholder="Optional notes, details, or reminders"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={styles.textarea}
      />

      {error ? <p style={styles.error}>{error}</p> : null}

      <div style={styles.buttonRow}>
        <button type="submit" style={styles.primaryButton}>
          {submitLabel}
        </button>
        {onCancel ? (
          <button type="button" onClick={onCancel} style={styles.secondaryButton}>
            Cancel
          </button>
        ) : null}
      </div>
    </form>
  );
}

function TaskItem({ task, onToggle, onDelete, onSave }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div style={styles.taskCard}>
      {isEditing ? (
        <TaskForm
          initialValues={task}
          submitLabel="Save changes"
          onCancel={() => setIsEditing(false)}
          onSubmit={(values) => {
            onSave(values);
            setIsEditing(false);
          }}
        />
      ) : (
        <div style={styles.taskRow}>
          <div style={{ flex: 1 }}>
            <button onClick={onToggle} style={styles.iconButton}>
              {task.completed ? <CheckCircle2 size={20} /> : <Circle size={20} />}
            </button>

            <div style={{ display: "inline-block", verticalAlign: "top", marginLeft: 12 }}>
              <h3
                style={{
                  ...styles.taskTitle,
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "#9ca3af" : "#111827",
                }}
              >
                {task.title}
              </h3>
              <p
                style={{
                  ...styles.taskDescription,
                  color: task.completed ? "#9ca3af" : "#4b5563",
                }}
              >
                {task.description || "No description"}
              </p>
            </div>
          </div>

          <div style={styles.buttonRow}>
            <button onClick={() => setIsEditing(true)} style={styles.secondaryButton}>
              <Pencil size={16} style={{ marginRight: 6 }} />
              Edit
            </button>
            <button onClick={onDelete} style={styles.dangerButton}>
              <Trash2 size={16} style={{ marginRight: 6 }} />
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function TaskList({
  selectedDay,
  tasks,
  onAddTask,
  onEditTask,
  onDeleteTask,
  onToggleTask,
}) {
  const completedCount = useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks]
  );

  return (
    <div>
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>
          <Plus size={18} />
          Add a task
        </h2>

        <TaskForm
          submitLabel="Add task"
          onSubmit={(values) => {
            onAddTask(selectedDay, {
              id: createId(),
              title: values.title,
              description: values.description,
              completed: false,
            });
          }}
        />
      </div>

      <div style={{ ...styles.card, marginTop: 20 }}>
        <div style={styles.headerRow}>
          <h2 style={styles.sectionTitle}>Tasks for {formatHumanDate(selectedDay)}</h2>
          <span style={styles.badge}>
            {completedCount}/{tasks.length} completed
          </span>
        </div>

        {tasks.length === 0 ? (
          <div style={styles.emptyBox}>
            <p style={{ fontWeight: 600 }}>No tasks for this day yet</p>
            <p style={styles.muted}>Add your first task to start planning this day.</p>
          </div>
        ) : (
          <div>
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={() => onToggleTask(selectedDay, task.id)}
                onDelete={() => onDeleteTask(selectedDay, task.id)}
                onSave={(updates) => onEditTask(selectedDay, task.id, updates)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const mapDateStateToProps = (state) => ({
  selectedDay: state.selectedDay,
  taskCount: (state.tasksByDay[state.selectedDay] || []).length,
});

const mapDateDispatchToProps = (dispatch) => ({
  onSelectDay: (day) => dispatch(selectDay(day)),
});

const ConnectedDatePicker = connect(
  mapDateStateToProps,
  mapDateDispatchToProps
)(DatePicker);

const mapTaskStateToProps = (state) => ({
  selectedDay: state.selectedDay,
  tasks: state.tasksByDay[state.selectedDay] || [],
});

const mapTaskDispatchToProps = (dispatch) => ({
  onAddTask: (day, task) => dispatch(addTask(day, task)),
  onEditTask: (day, taskId, updates) => dispatch(editTask(day, taskId, updates)),
  onDeleteTask: (day, taskId) => dispatch(deleteTask(day, taskId)),
  onToggleTask: (day, taskId) => dispatch(toggleTask(day, taskId)),
});

const ConnectedTaskList = connect(
  mapTaskStateToProps,
  mapTaskDispatchToProps
)(TaskList);

function PlannerLayout() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.mainTitle}>Daily Planner</h1>
        <p style={styles.subtitle}>
          Manage tasks for any day, switch dates instantly, and keep everything organized with Redux.
        </p>

        <div style={styles.grid}>
          <ConnectedDatePicker />
          <ConnectedTaskList />
        </div>
      </div>
    </div>
  );
}

export default function DailyPlannerApp() {
  return (
    <Provider store={store}>
      <PlannerLayout />
    </Provider>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f3f4f6",
    padding: "24px",
    fontFamily: "Arial, sans-serif",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  mainTitle: {
    fontSize: "36px",
    fontWeight: "700",
    marginBottom: "8px",
  },
  subtitle: {
    color: "#4b5563",
    marginBottom: "24px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "320px 1fr",
    gap: "24px",
  },
  card: {
    background: "#ffffff",
    borderRadius: "16px",
    padding: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },
  sectionTitle: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "22px",
    marginBottom: "16px",
  },
  label: {
    display: "block",
    marginBottom: "6px",
    marginTop: "12px",
    fontWeight: "600",
  },
  input: {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    marginBottom: "12px",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  textarea: {
    width: "100%",
    minHeight: "110px",
    padding: "10px 12px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    marginBottom: "12px",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  buttonRow: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "8px",
  },
  primaryButton: {
    padding: "10px 14px",
    borderRadius: "10px",
    border: "none",
    background: "#111827",
    color: "#ffffff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  secondaryButton: {
    padding: "10px 14px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    background: "#ffffff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  dangerButton: {
    padding: "10px 14px",
    borderRadius: "10px",
    border: "none",
    background: "#dc2626",
    color: "#ffffff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  infoBox: {
    marginTop: "16px",
    padding: "16px",
    borderRadius: "12px",
    background: "#f9fafb",
  },
  dateText: {
    fontSize: "18px",
    fontWeight: "700",
    marginTop: "4px",
  },
  badge: {
    display: "inline-block",
    marginTop: "10px",
    background: "#e5e7eb",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "13px",
  },
  muted: {
    color: "#6b7280",
    fontSize: "14px",
  },
  emptyBox: {
    padding: "30px",
    border: "2px dashed #d1d5db",
    borderRadius: "16px",
    textAlign: "center",
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
  },
  taskCard: {
    border: "1px solid #e5e7eb",
    borderRadius: "14px",
    padding: "16px",
    marginBottom: "12px",
    background: "#ffffff",
  },
  taskRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    alignItems: "flex-start",
  },
  iconButton: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    verticalAlign: "top",
    marginTop: "2px",
  },
  taskTitle: {
    margin: 0,
    fontSize: "18px",
  },
  taskDescription: {
    marginTop: "6px",
    marginBottom: 0,
    fontSize: "14px",
  },
  error: {
    color: "#dc2626",
    fontSize: "14px",
    marginTop: "6px",
  },
};

