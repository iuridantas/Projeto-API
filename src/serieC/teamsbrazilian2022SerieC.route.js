const route = require('express').Router();
const controllerTeamsbrazilian2022SerieC = require('./teamsbrazilian2022SerieC.controller');
const {validId,validobjectBody,} = require('../middleware/teamsbrazilian2022.middleware');
const authmiddleware = require('../auth/auth.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/Seriec',controllerTeamsbrazilian2022SerieC.findALLTeamsbrazilian2022SerieCController,);
route.get('/Seriec/find/:id',validId,controllerTeamsbrazilian2022SerieC.findByIdTeambrazilian2022SerieCController,);
route.post('/Seriec/create',authmiddleware,validobjectBody,controllerTeamsbrazilian2022SerieC.createTeamsbrazilian2022SerieCController,);
route.put('/Seriec/update/:id',authmiddleware,validId,validobjectBody,controllerTeamsbrazilian2022SerieC.updateTeamsbrazilian2022SerieCController,);
route.delete('/Seriec/delete/:id',authmiddleware,validId,controllerTeamsbrazilian2022SerieC.deleteTeamsbrazilian2022SerieCController,);
route.get('/Seriec/search',authmiddleware,controllerTeamsbrazilian2022SerieC.findSearchTeamsbrazilian2022SerieCController,);

module.exports = route;

