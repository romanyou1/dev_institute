import { useSelector } from "react-redux";

export default function CategorySelector({ selectedCategory, onChange }) {
  const categories = useSelector((state) => state.categories);

  return (
    <div style={{ marginBottom: "1rem" }}>
      <label htmlFor="category-select" style={{ marginRight: "0.5rem" }}>
        Category:
      </label>

      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="all">All</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}