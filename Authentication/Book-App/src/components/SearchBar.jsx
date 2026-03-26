import React from "react";

export default function SearchBar({
  input,
  setInput,
  handleSearch,
  sortOrder,
  setSortOrder,
}) {
  return (
    <form className="controls" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search books..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit">Search</button>

      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
    </form>
  );
}