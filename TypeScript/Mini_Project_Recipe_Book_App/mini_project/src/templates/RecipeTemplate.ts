import RecipeCollection from "../model/RecipeCollection";

export default class RecipeTemplate {
  private static instance: RecipeTemplate = new RecipeTemplate();
  private recipeCollection = RecipeCollection.getInstance();
  private container: HTMLDivElement | null;

  private constructor() {
    this.container = document.querySelector("#recipeContainer");
  }

  public static getInstance(): RecipeTemplate {
    return RecipeTemplate.instance;
  }

  public render(): void {
    if (!this.container) return;

    this.container.innerHTML = "";

    if (this.recipeCollection.recipes.length === 0) {
      this.container.innerHTML = "<p>No recipes yet. Add one above.</p>";
      return;
    }

    const sortedRecipes = [...this.recipeCollection.recipes].sort(
      (a, b) => Number(b.isFavorite) - Number(a.isFavorite)
    );

    sortedRecipes.forEach((recipe) => {
      const card = document.createElement("article");
      card.className = "recipe-card";

      const header = document.createElement("div");
      header.className = "recipe-card__header";

      const title = document.createElement("h2");
      title.textContent = recipe.title;

      const favoriteBtn = document.createElement("button");
      favoriteBtn.textContent = recipe.isFavorite ? "★ Favorite" : "☆ Favorite";
      favoriteBtn.setAttribute("aria-label", `Toggle favorite for ${recipe.title}`);
      favoriteBtn.addEventListener("click", () => {
        this.recipeCollection.toggleFavorite(recipe.id);
        this.render();
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.setAttribute("aria-label", `Delete ${recipe.title}`);
      deleteBtn.addEventListener("click", () => {
        this.recipeCollection.removeRecipe(recipe.id);
        this.render();
      });

      header.append(title, favoriteBtn, deleteBtn);

      const detailsBtn = document.createElement("button");
      detailsBtn.textContent = "Show Details";
      detailsBtn.className = "recipe-card__toggle";

      const details = document.createElement("div");
      details.className = "recipe-card__details";
      details.style.display = "none";

      const ingredientsTitle = document.createElement("h3");
      ingredientsTitle.textContent = "Ingredients";

      const ingredientsList = document.createElement("ul");
      recipe.ingredients.forEach((ingredient) => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
      });

      const instructionsTitle = document.createElement("h3");
      instructionsTitle.textContent = "Instructions";

      const instructionsText = document.createElement("p");
      instructionsText.textContent = recipe.instructions;

      details.append(
        ingredientsTitle,
        ingredientsList,
        instructionsTitle,
        instructionsText
      );

      detailsBtn.addEventListener("click", () => {
        const isHidden = details.style.display === "none";
        details.style.display = isHidden ? "block" : "none";
        detailsBtn.textContent = isHidden ? "Hide Details" : "Show Details";
      });

      card.append(header, detailsBtn, details);
      this.container?.appendChild(card);
    });
  }
}