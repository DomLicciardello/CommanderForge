import { useState } from "react";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";

function App() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchCards = async (name) => {
    setLoading(true);
    try {
      const url = `https://api.scryfall.com/cards/search?q=${encodeURIComponent(name)}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.object === "error") {
        setCards([]);
      } else {
        setCards(data.data); // Scryfall restituisce le carte in data[]
      }
    } catch (err) {
      console.error("Errore nella chiamata API:", err);
      setCards([]);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>CommanderForge</h1>
      <SearchBar onSearch={searchCards} />
      {loading ? <p>Caricamento...</p> : <CardList cards={cards} />}
    </div>
  );
}

export default App;
