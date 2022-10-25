const route = require('express').Router();
const controllerTeamsbrazilian2022SerieDGrupo7 = require('./teamsbrazilian2022SerieDGrupo7.controller');
const {validId,validobjectBody,} = require('../../middleware/teamsbrazilian2022.middleware');
const authmiddleware = require('../../auth/auth.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/Seried/Grupo7',controllerTeamsbrazilian2022SerieDGrupo7.findALLTeamsbrazilian2022SerieDGrupo7Controller,);
route.get('/Seried/Grupo7/find/:id',validId,controllerTeamsbrazilian2022SerieDGrupo7.findByIdTeambrazilian2022SerieDGrupo7Controller,);
route.post('/Seried/Grupo7/create',authmiddleware,validobjectBody,controllerTeamsbrazilian2022SerieDGrupo7.createTeamsbrazilian2022SerieDGrupo7Controller,);
route.put('/Seried/Grupo7/update/:id',authmiddleware,validId,validobjectBody,controllerTeamsbrazilian2022SerieDGrupo7.updateTeamsbrazilian2022SerieDGrupo7Controller,);
route.delete('/Seried/Grupo7/delete/:id',authmiddleware,validId,controllerTeamsbrazilian2022SerieDGrupo7.deleteTeamsbrazilian2022SerieDGrupo7Controller,);
route.get('/Seried/Grupo7/search',authmiddleware,controllerTeamsbrazilian2022SerieDGrupo7.findSearchTeamsbrazilian2022SerieDGrupo7Controller,);

module.exports = route;
