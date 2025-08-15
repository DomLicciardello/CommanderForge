export default function CardList({ cards }) {
  if (!cards.length) return <p>Nessuna carta disponibile.</p>;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "1rem",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.id}
          style={{
            border: "1px solid #ccc",
            padding: "0.5rem",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <h3>{card.name}</h3>
          {card.image_uris ? (
            <img
              src={card.image_uris.normal}
              alt={card.name}
              style={{ width: "100%", height: "auto" }}
            />
          ) : (
            <p>📄 Nessuna immagine</p>
          )}
          {card.set_name && <p><strong>Set:</strong> {card.set_name}</p>}
          {card.type_line && <p><strong>Tipo:</strong> {card.type_line}</p>}
        </div>
      ))}
    </div>
  );
}
