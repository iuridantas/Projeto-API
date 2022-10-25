const route = require('express').Router();
const controllerTeamsbrazilian2022SerieDGrupo3 = require('./teamsbrazilian2022SerieDGrupo3.controller');
const {validId,validobjectBody,} = require('../../middleware/teamsbrazilian2022.middleware');
const authmiddleware = require('../../auth/auth.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/Seried/Grupo3',controllerTeamsbrazilian2022SerieDGrupo3.findALLTeamsbrazilian2022SerieDGrupo3Controller,);
route.get('/Seried/Grupo3/find/:id',validId,controllerTeamsbrazilian2022SerieDGrupo3.findByIdTeambrazilian2022SerieDGrupo3Controller,);
route.post('/Seried/Grupo3/create',authmiddleware,validobjectBody,controllerTeamsbrazilian2022SerieDGrupo3.createTeamsbrazilian2022SerieDGrupo3Controller,);
route.put('/Seried/Grupo3/update/:id',authmiddleware,validId,validobjectBody,controllerTeamsbrazilian2022SerieDGrupo3.updateTeamsbrazilian2022SerieDGrupo3Controller,);
route.delete('/Seried/Grupo3/delete/:id',authmiddleware,validId,controllerTeamsbrazilian2022SerieDGrupo3.deleteTeamsbrazilian2022SerieDGrupo3Controller,);
route.get('/Seried/Grupo3/search',authmiddleware,controllerTeamsbrazilian2022SerieDGrupo3.findSearchTeamsbrazilian2022SerieDGrupo3Controller,);

module.exports = route;
