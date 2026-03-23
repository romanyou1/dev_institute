import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchError, fetchStart, fetchSuccess } from "../features/dataSlice";
import { fetchRecipes } from "../api/api";

export default function DataFetcher() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.data);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        dispatch(fetchStart());
        const recipes = await fetchRecipes();
        dispatch(fetchSuccess(recipes));
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Failed to fetch recipes";
        dispatch(fetchError(message));
      }
    };

    loadRecipes();
  }, [dispatch]);

  return (
    <section style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem" }}>
      <h1>Recipe List</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "crimson" }}>Error: {error}</p>}

      {!loading && !error && items.length === 0 && <p>No recipes found.</p>}

      {!loading && !error && items.length > 0 && (
        <div>
          {items.map((recipe) => (
            <article
              key={recipe.id}
              style={{
                background: "white",
                border: "1px solid #ddd",
                borderRadius: "12px",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <h2>{recipe.name}</h2>
              <p>
                <strong>Cuisine:</strong> {recipe.cuisine ?? "Unknown"}
              </p>
              <p>
                <strong>Difficulty:</strong> {recipe.difficulty ?? "Unknown"}
              </p>
              {recipe.image && (
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  style={{ width: "200px", borderRadius: "8px" }}
                />
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}