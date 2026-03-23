import "./style.css";
import RecipeCollection from "./model/RecipeCollection";
import RecipeTemplate from "./templates/RecipeTemplate";

const recipeCollection = RecipeCollection.getInstance();
const recipeTemplate = RecipeTemplate.getInstance();

const entryForm = document.querySelector("#recipeEntryForm") as HTMLFormElement;
const recipeTitle = document.querySelector("#recipeTitle") as HTMLInputElement;
const ingredients = document.querySelector("#ingredients") as HTMLTextAreaElement;
const instructions = document.querySelector("#instructions") as HTMLTextAreaElement;
const clearRecipesButton = document.querySelector(
  "#clearRecipesButton"
) as HTMLButtonElement;

const parseIngredients = (rawIngredients: string): string[] => {
  return rawIngredients
    .split("\n")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
};

entryForm.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();

  const titleValue = recipeTitle.value.trim();
  const ingredientsValue = parseIngredients(ingredients.value);
  const instructionsValue = instructions.value.trim();

  if (!titleValue || ingredientsValue.length === 0 || !instructionsValue) return;

  recipeCollection.addRecipe(titleValue, ingredientsValue, instructionsValue);
  recipeTemplate.render();

  entryForm.reset();
  recipeTitle.focus();
});

clearRecipesButton.addEventListener("click", () => {
  const confirmed = window.confirm("Delete all recipes?");
  if (!confirmed) return;

  recipeCollection.clearAll();
  recipeTemplate.render();
});

recipeTemplate.render();