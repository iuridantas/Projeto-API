require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routesSerieA = require('./serieA/teamsbrazilian2022SerieA.route');
const routesSerieB = require('./serieB/teamsbrazilian2022SerieB.route');
const routesSerieC = require('./serieC/teamsbrazilian2022SerieC.route');
const routesUsers = require('./users/users.routes');
const authroute = require('./auth/auth.routes');
const connecttodatabase = require('./database/database');

const port = process.env.PORT || 3001;
const app = express();

connecttodatabase();

app.use(express.json());
app.use(cors());
app.use('/', routesSerieA);
app.use('/', routesSerieB)
app.use('/', routesSerieC)
app.use('/users', routesUsers);
app.use('/auth', authroute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
