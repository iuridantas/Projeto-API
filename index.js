const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/teamsbrazilian2022.route');
const connecttodatabase = require('./src/database/database');

const port = 3000;
const app = express();

connecttodatabase();

app.use(express.json());
app.use(cors());
app.use('/teamsbrazilian2022', routes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
