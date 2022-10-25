const route = require('express').Router();
const controllerTeamsbrazilian2022SerieDGrupo8 = require('./teamsbrazilian2022SerieDGrupo8.controller');
const {validId,validobjectBody,} = require('../../middleware/teamsbrazilian2022.middleware');
const authmiddleware = require('../../auth/auth.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/Seried/Grupo8',controllerTeamsbrazilian2022SerieDGrupo8.findALLTeamsbrazilian2022SerieDGrupo8Controller,);
route.get('/Seried/Grupo8/find/:id',validId,controllerTeamsbrazilian2022SerieDGrupo8.findByIdTeambrazilian2022SerieDGrupo8Controller,);
route.post('/Seried/Grupo8/create',authmiddleware,validobjectBody,controllerTeamsbrazilian2022SerieDGrupo8.createTeamsbrazilian2022SerieDGrupo8Controller,);
route.put('/Seried/Grupo8/update/:id',authmiddleware,validId,validobjectBody,controllerTeamsbrazilian2022SerieDGrupo8.updateTeamsbrazilian2022SerieDGrupo8Controller,);
route.delete('/Seried/Grupo8/delete/:id',authmiddleware,validId,controllerTeamsbrazilian2022SerieDGrupo8.deleteTeamsbrazilian2022SerieDGrupo8Controller,);
route.get('/Seried/Grupo8/search',authmiddleware,controllerTeamsbrazilian2022SerieDGrupo8.findSearchTeamsbrazilian2022SerieDGrupo8Controller,);

module.exports = route;
