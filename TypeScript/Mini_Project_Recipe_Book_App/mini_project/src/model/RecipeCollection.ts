import RecipeItem, { type IRecipeItem } from "./RecipeItem";

export default class RecipeCollection {
  private static instance: RecipeCollection = new RecipeCollection();
  private dataState: RecipeItem[] = [];
  private storageKey = "recipe_book_app";

  private constructor() {
    this.load();
  }

  public static getInstance(): RecipeCollection {
    return RecipeCollection.instance;
  }

  get recipes(): RecipeItem[] {
    return this.dataState;
  }

  addRecipe(title: string, ingredients: string[], instructions: string): void {
    const newRecipe = new RecipeItem(title, ingredients, instructions);
    this.dataState.push(newRecipe);
    this.save();
  }

  removeRecipe(id: string): void {
    this.dataState = this.dataState.filter((recipe) => recipe.id !== id);
    this.save();
  }

  toggleFavorite(id: string): void {
    this.dataState = this.dataState.map((recipe) =>
      recipe.id === id
        ? new RecipeItem(
            recipe.title,
            recipe.ingredients,
            recipe.instructions,
            !recipe.isFavorite,
            recipe.id
          )
        : recipe
    );
    this.save();
  }

  clearAll(): void {
    this.dataState = [];
    this.save();
  }

  private save(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.dataState));
  }

  private load(): void {
    const storedRecipes = localStorage.getItem(this.storageKey);

    if (!storedRecipes) {
      this.dataState = [];
      return;
    }

    try {
      const parsedData: IRecipeItem[] = JSON.parse(storedRecipes);
      this.dataState = parsedData.map(
        (recipe) =>
          new RecipeItem(
            recipe.title,
            recipe.ingredients,
            recipe.instructions,
            recipe.isFavorite,
            recipe.id
          )
      );
    } catch (error) {
      console.error("Failed to load recipes from localStorage:", error);
      this.dataState = [];
    }
  }
}