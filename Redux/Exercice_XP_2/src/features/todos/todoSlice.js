import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.todos.push(action.payload);
      },
      prepare: (text) => ({
        payload: {
          id: nanoid(),
          text,
          completed: false,
        },
      }),
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;