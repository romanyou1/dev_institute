import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { DataState, Recipe } from "../types/types";

const initialState: DataState<Recipe> = {
  items: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess: (state, action: PayloadAction<Recipe[]>) => {
      state.loading = false;
      state.items = action.payload;
      state.error = null;
    },
    fetchError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchError } = dataSlice.actions;
export default dataSlice.reducer;