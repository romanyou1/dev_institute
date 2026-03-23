import { createSelector } from "@reduxjs/toolkit";

export const selectTasks = (state) => state.tasks;
export const selectCategories = (state) => state.categories;
export const selectSelectedCategoryId = (_, categoryId) => categoryId;

export const selectTasksByCategory = createSelector(
  [selectTasks, selectSelectedCategoryId],
  (tasks, categoryId) => {
    if (!categoryId || categoryId === "all") return tasks;
    return tasks.filter((task) => task.categoryId === categoryId);
  }
);

export const selectCompletedTasks = createSelector([selectTasks], (tasks) => {
  return tasks.filter((task) => task.completed).length;
});

export const selectCategoryById = createSelector(
  [selectCategories, (_, categoryId) => categoryId],
  (categories, categoryId) =>
    categories.find((category) => category.id === categoryId)
);