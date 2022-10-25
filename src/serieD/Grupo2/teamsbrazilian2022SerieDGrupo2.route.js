const route = require('express').Router();
const controllerTeamsbrazilian2022SerieDGrupo2 = require('./teamsbrazilian2022SerieDGrupo2.controller');
const {validId,validobjectBody,} = require('../../middleware/teamsbrazilian2022.middleware');
const authmiddleware = require('../../auth/auth.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/Seried/Grupo2',controllerTeamsbrazilian2022SerieDGrupo2.findALLTeamsbrazilian2022SerieDGrupo2Controller,);
route.get('/Seried/Grupo2/find/:id',validId,controllerTeamsbrazilian2022SerieDGrupo2.findByIdTeambrazilian2022SerieDGrupo2Controller,);
route.post('/Seried/Grupo2/create',authmiddleware,validobjectBody,controllerTeamsbrazilian2022SerieDGrupo2.createTeamsbrazilian2022SerieDGrupo2Controller,);
route.put('/Seried/Grupo2/update/:id',authmiddleware,validId,validobjectBody,controllerTeamsbrazilian2022SerieDGrupo2.updateTeamsbrazilian2022SerieDGrupo2Controller,);
route.delete('/Seried/Grupo2/delete/:id',authmiddleware,validId,controllerTeamsbrazilian2022SerieDGrupo2.deleteTeamsbrazilian2022SerieDGrupo2Controller,);
route.get('/Seried/Grupo2/search',authmiddleware,controllerTeamsbrazilian2022SerieDGrupo2.findSearchTeamsbrazilian2022SerieDGrupo2Controller,);

module.exports = route;
