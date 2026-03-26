import React, { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";

function getPublishedYear(publishedDate) {
  if (!publishedDate) return 0;
  const match = String(publishedDate).match(/\d{4}/);
  return match ? Number(match[0]) : 0;
}

function normalizeBooks(items = []) {
  return items.map((item) => {
    const info = item.volumeInfo || {};
    const year = getPublishedYear(info.publishedDate);

    return {
      id: item.id,
      title: info.title || "Untitled",
      author: info.authors?.join(", ") || "Unknown author",
      publishedYear: year || "Unknown",
      sortYear: year,
      image:
        info.imageLinks?.thumbnail ||
        info.imageLinks?.smallThumbnail ||
        "https://via.placeholder.com/160x230?text=No+Cover",
    };
  });
}

export default function App() {
  const [query, setQuery] = useState("javascript");
  const [input, setInput] = useState("Javascript");
  const [books, setBooks] = useState([]);
  const [sortOrder, setSortOrder] = useState("newest");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchBooks() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=24`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch books.");
        }

        const data = await res.json();
        setBooks(normalizeBooks(data.items || []));
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Something went wrong while fetching books.");
          setBooks([]);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchBooks();
    return () => controller.abort();
  }, [query]);

  const filteredBooks = useMemo(() => {
    const filtered = books.filter((book) =>
      `${book.title} ${book.author}`.toLowerCase().includes(input.toLowerCase())
    );

    return [...filtered].sort((a, b) => {
      if (sortOrder === "newest") return b.sortYear - a.sortYear;
      return a.sortYear - b.sortYear;
    });
  }, [books, input, sortOrder]);

  function handleSearch(e) {
    e.preventDefault();
    if (input.trim()) {
      setQuery(input.trim());
    }
  }

  return (
    <div className="app">
      <Header />
      <div className="controls-wrapper">
        <SearchBar
          input={input}
          setInput={setInput}
          handleSearch={handleSearch}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      </div>

      <div className="container">
        {loading && <p className="message">Loading books...</p>}
        {error && <p className="message error">{error}</p>}
        {!loading && !error && <BookList books={filteredBooks} />}
      </div>
    </div>
  );
}
