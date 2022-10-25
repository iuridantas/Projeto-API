const route = require('express').Router();
const controllerTeamsbrazilian2022SerieDGrupo4 = require('./teamsbrazilian2022SerieDGrupo4.controller');
const {validId,validobjectBody,} = require('../../middleware/teamsbrazilian2022.middleware');
const authmiddleware = require('../../auth/auth.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/Seried/Grupo4',controllerTeamsbrazilian2022SerieDGrupo4.findALLTeamsbrazilian2022SerieDGrupo4Controller,);
route.get('/Seried/Grupo4/find/:id',validId,controllerTeamsbrazilian2022SerieDGrupo4.findByIdTeambrazilian2022SerieDGrupo4Controller,);
route.post('/Seried/Grupo4/create',authmiddleware,validobjectBody,controllerTeamsbrazilian2022SerieDGrupo4.createTeamsbrazilian2022SerieDGrupo4Controller,);
route.put('/Seried/Grupo4/update/:id',authmiddleware,validId,validobjectBody,controllerTeamsbrazilian2022SerieDGrupo4.updateTeamsbrazilian2022SerieDGrupo4Controller,);
route.delete('/Seried/Grupo4/delete/:id',authmiddleware,validId,controllerTeamsbrazilian2022SerieDGrupo4.deleteTeamsbrazilian2022SerieDGrupo4Controller,);
route.get('/Seried/Grupo4/search',authmiddleware,controllerTeamsbrazilian2022SerieDGrupo4.findSearchTeamsbrazilian2022SerieDGrupo4Controller,);

module.exports = route;
