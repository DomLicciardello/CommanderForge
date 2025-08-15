import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Inserisci il nome della carta..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "0.5rem", fontSize: "1rem", width: "250px" }}
      />
      <button
        type="submit"
        style={{ padding: "0.5rem 1rem", marginLeft: "0.5rem", cursor: "pointer" }}
      >
        Cerca
      </button>
    </form>
  );
}
