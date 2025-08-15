// backend/server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Rotta GET base
app.get('/', (req, res) => {
  res.send('Ciao dal backend!');
});

// Avvio server
app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});
