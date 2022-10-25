const route = require('express').Router();
const controllerTeamsbrazilian2022SerieDGrupo1 = require('./teamsbrazilian2022SerieDGrupo1.controller');
const {validId,validobjectBody,} = require('../../middleware/teamsbrazilian2022.middleware');
const authmiddleware = require('../../auth/auth.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/Seried/Grupo1',controllerTeamsbrazilian2022SerieDGrupo1.findALLTeamsbrazilian2022SerieDGrupo1Controller,);
route.get('/Seried/Grupo1/find/:id',validId,controllerTeamsbrazilian2022SerieDGrupo1.findByIdTeambrazilian2022SerieDGrupo1Controller,);
route.post('/Seried/Grupo1/create',authmiddleware,validobjectBody,controllerTeamsbrazilian2022SerieDGrupo1.createTeamsbrazilian2022SerieDGrupo1Controller,);
route.put('/Seried/Grupo1/update/:id',authmiddleware,validId,validobjectBody,controllerTeamsbrazilian2022SerieDGrupo1.updateTeamsbrazilian2022SerieDGrupo1Controller,);
route.delete('/Seried/Grupo1/delete/:id',authmiddleware,validId,controllerTeamsbrazilian2022SerieDGrupo1.deleteTeamsbrazilian2022SerieDGrupo1Controller,);
route.get('/Seried/Grupo1/search',authmiddleware,controllerTeamsbrazilian2022SerieDGrupo1.findSearchTeamsbrazilian2022SerieDGrupo1Controller,);

module.exports = route;
