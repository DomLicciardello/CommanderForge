import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CardList from '../components/CardList';

const Search = () => {
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
        setCards(data.data);
      }
    } catch (err) {
      console.error("Errore nella chiamata API:", err);
      setCards([]);
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Cerca Carte</h1>
      <SearchBar onSearch={searchCards} />
      {loading ? <p>Caricamento...</p> : <CardList cards={cards} />}
    </div>
  );
};

export default Search;