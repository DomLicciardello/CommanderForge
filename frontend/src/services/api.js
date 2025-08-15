const BASE_URL = "https://api.magicthegathering.io/v1";

export async function fetchCards(page = 1, pageSize = 20) {
  const res = await fetch(`${BASE_URL}/cards?page=${page}&pageSize=${pageSize}`);
  const data = await res.json();
  return data.cards;
}

export async function searchCardsByName(name, page = 1, pageSize = 20) {
  const res = await fetch(`${BASE_URL}/cards?name=${encodeURIComponent(name)}&page=${page}&pageSize=${pageSize}`);
  const data = await res.json();
  return data.cards;
}
