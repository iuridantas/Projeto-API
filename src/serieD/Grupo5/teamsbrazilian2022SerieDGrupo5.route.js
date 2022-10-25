const route = require('express').Router();
const controllerTeamsbrazilian2022SerieDGrupo5 = require('./teamsbrazilian2022SerieDGrupo5.controller');
const {validId,validobjectBody,} = require('../../middleware/teamsbrazilian2022.middleware');
const authmiddleware = require('../../auth/auth.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/Seried/Grupo5',controllerTeamsbrazilian2022SerieDGrupo5.findALLTeamsbrazilian2022SerieDGrupo5Controller,);
route.get('/Seried/Grupo5/find/:id',validId,controllerTeamsbrazilian2022SerieDGrupo5.findByIdTeambrazilian2022SerieDGrupo5Controller,);
route.post('/Seried/Grupo5/create',authmiddleware,validobjectBody,controllerTeamsbrazilian2022SerieDGrupo5.createTeamsbrazilian2022SerieDGrupo5Controller,);
route.put('/Seried/Grupo5/update/:id',authmiddleware,validId,validobjectBody,controllerTeamsbrazilian2022SerieDGrupo5.updateTeamsbrazilian2022SerieDGrupo5Controller,);
route.delete('/Seried/Grupo5/delete/:id',authmiddleware,validId,controllerTeamsbrazilian2022SerieDGrupo5.deleteTeamsbrazilian2022SerieDGrupo5Controller,);
route.get('/Seried/Grupo5/search',authmiddleware,controllerTeamsbrazilian2022SerieDGrupo5.findSearchTeamsbrazilian2022SerieDGrupo5Controller,);

module.exports = route;
