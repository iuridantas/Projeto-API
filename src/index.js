require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routesSerieA = require('./serieA/teamsbrazilian2022SerieA.route');
const routesSerieB = require('./serieB/teamsbrazilian2022SerieB.route');
const routesSerieC = require('./serieC/teamsbrazilian2022SerieC.route');
const routesSerieD1 = require('./serieD/Grupo1/teamsbrazilian2022SerieDGrupo1.route');
const routesSerieD2 = require('./serieD/Grupo2/teamsbrazilian2022SerieDGrupo2.route');
const routesSerieD3 = require('./serieD/Grupo3/teamsbrazilian2022SerieDGrupo3.route');
const routesSerieD4 = require('./serieD/Grupo4/teamsbrazilian2022SerieDGrupo4.route');
const routesSerieD5 = require('./serieD/Grupo5/teamsbrazilian2022SerieDGrupo5.route');
const routesSerieD6 = require('./serieD/Grupo6/teamsbrazilian2022SerieDGrupo6.route');
const routesSerieD7 = require('./serieD/Grupo7/teamsbrazilian2022SerieDGrupo7.route');
const routesSerieD8 = require('./serieD/Grupo8/teamsbrazilian2022SerieDGrupo8.route');
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
app.use('/', routesSerieD1)
app.use('/', routesSerieD2)
app.use('/', routesSerieD3)
app.use('/', routesSerieD4)
app.use('/', routesSerieD5)
app.use('/', routesSerieD6)
app.use('/', routesSerieD7)
app.use('/', routesSerieD8)
app.use('/users', routesUsers);
app.use('/auth', authroute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
