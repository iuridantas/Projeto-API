const route = require('express').Router();
const controllerTeamsbrazilian2022SerieB = require('./teamsbrazilian2022SerieB.controller');
const {validId,validobjectBody,} = require('../middleware/teamsbrazilian2022.middleware');
const authmiddleware = require('../auth/auth.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/serieb',controllerTeamsbrazilian2022SerieB.findALLTeamsbrazilian2022SerieBController,);
route.get('/serieb/find/:id',validId,controllerTeamsbrazilian2022SerieB.findByIdTeambrazilian2022SerieBController,);
route.post('/serieb/create',authmiddleware,validobjectBody,controllerTeamsbrazilian2022SerieB.createTeamsbrazilian2022SerieBController,);
route.put('/serieb/update/:id',authmiddleware,validId,validobjectBody,controllerTeamsbrazilian2022SerieB.updateTeamsbrazilian2022SerieBController,);
route.delete('/serieb/delete/:id',authmiddleware,validId,controllerTeamsbrazilian2022SerieB.deleteTeamsbrazilian2022SerieBController,);
route.get('/serieb/search',authmiddleware,controllerTeamsbrazilian2022SerieB.findSearchTeamsbrazilian2022SerieBController,);

module.exports = route;

