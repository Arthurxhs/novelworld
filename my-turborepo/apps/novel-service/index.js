// apps/novel-service/index.js
const express = require('express');
const app = express();
const port = 3001;

app.get('/novels', (req, res) => {
  res.send('Este es el servicio de novelas!');
});

app.listen(port, () => {
  console.log(`Novel service listening at http://localhost:${port}`);
});