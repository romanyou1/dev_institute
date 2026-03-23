import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "cat-1", name: "Work" },
  { id: "cat-2", name: "Personal" },
  { id: "cat-3", name: "Study" },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name) {
        return {
          payload: {
            id: nanoid(),
            name,
          },
        };
      },
    },
    editCategory(state, action) {
      const { id, name } = action.payload;
      const category = state.find((c) => c.id === id);
      if (category) {
        category.name = name;
      }
    },
    deleteCategory(state, action) {
      return state.filter((category) => category.id !== action.payload);
    },
  },
});

export const { addCategory, editCategory, deleteCategory } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;