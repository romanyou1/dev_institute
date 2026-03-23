import type { Recipe, RecipesApiResponse } from "../types/types";

export async function fetchRecipes(): Promise<Recipe[]> {
  const response = await fetch("https://dummyjson.com/recipes");

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  const data: RecipesApiResponse = await response.json();
  return Array.isArray(data.recipes) ? data.recipes : [];
}