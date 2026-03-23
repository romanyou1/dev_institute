import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "task-1",
    title: "Finish Redux setup",
    categoryId: "cat-1",
    completed: false,
    progress: 40,
  },
  {
    id: "task-2",
    title: "Read 20 pages",
    categoryId: "cat-3",
    completed: true,
    progress: 100,
  },
  {
    id: "task-3",
    title: "Buy groceries",
    categoryId: "cat-2",
    completed: false,
    progress: 10,
  },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ title, categoryId }) {
        return {
          payload: {
            id: nanoid(),
            title,
            categoryId,
            completed: false,
            progress: 0,
          },
        };
      },
    },
    editTask(state, action) {
      const { id, title, categoryId } = action.payload;
      const task = state.find((t) => t.id === id);
      if (task) {
        if (title !== undefined) task.title = title;
        if (categoryId !== undefined) task.categoryId = categoryId;
      }
    },
    deleteTask(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },
    updateTaskProgress(state, action) {
      const { id, progress } = action.payload;
      const task = state.find((t) => t.id === id);
      if (task) {
        task.progress = progress;
        task.completed = progress === 100;
      }
    },
    toggleTaskCompleted(state, action) {
      const task = state.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        task.progress = task.completed ? 100 : 0;
      }
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  updateTaskProgress,
  toggleTaskCompleted,
} = tasksSlice.actions;

export default tasksSlice.reducer;