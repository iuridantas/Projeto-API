const route = require('express').Router();
const controllerTeamsbrazilian2022SerieDGrupo6 = require('./teamsbrazilian2022SerieDGrupo6.controller');
const {validId,validobjectBody,} = require('../../middleware/teamsbrazilian2022.middleware');
const authmiddleware = require('../../auth/auth.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/Seried/Grupo6',controllerTeamsbrazilian2022SerieDGrupo6.findALLTeamsbrazilian2022SerieDGrupo6Controller,);
route.get('/Seried/Grupo6/find/:id',validId,controllerTeamsbrazilian2022SerieDGrupo6.findByIdTeambrazilian2022SerieDGrupo6Controller,);
route.post('/Seried/Grupo6/create',authmiddleware,validobjectBody,controllerTeamsbrazilian2022SerieDGrupo6.createTeamsbrazilian2022SerieDGrupo6Controller,);
route.put('/Seried/Grupo6/update/:id',authmiddleware,validId,validobjectBody,controllerTeamsbrazilian2022SerieDGrupo6.updateTeamsbrazilian2022SerieDGrupo6Controller,);
route.delete('/Seried/Grupo6/delete/:id',authmiddleware,validId,controllerTeamsbrazilian2022SerieDGrupo6.deleteTeamsbrazilian2022SerieDGrupo6Controller,);
route.get('/Seried/Grupo6/search',authmiddleware,controllerTeamsbrazilian2022SerieDGrupo6.findSearchTeamsbrazilian2022SerieDGrupo6Controller,);

module.exports = route;
