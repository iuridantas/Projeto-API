const route = require('express').Router();
const controllerTeamsbrazilian2022SerieA = require('./teamsbrazilian2022SerieA.controller');
const {validId,validobjectBody,} = require('../middleware/teamsbrazilian2022.middleware');
const authmiddleware = require('../auth/auth.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/seriea',controllerTeamsbrazilian2022SerieA.findALLTeamsbrazilian2022SerieAController,);
route.get('/seriea/find/:id',validId,controllerTeamsbrazilian2022SerieA.findByIdTeambrazilian2022SerieAController,);
route.post('/seriea/create',authmiddleware,validobjectBody,controllerTeamsbrazilian2022SerieA.createTeamsbrazilian2022SerieAController,);
route.put('/seriea/update/:id',authmiddleware,validId,validobjectBody,controllerTeamsbrazilian2022SerieA.updateTeamsbrazilian2022SerieAController,);
route.delete('/seriea/delete/:id',authmiddleware,validId,controllerTeamsbrazilian2022SerieA.deleteTeamsbrazilian2022SerieAController,);
route.get('/seriea/search',authmiddleware,controllerTeamsbrazilian2022SerieA.findSearchTeamsbrazilian2022SerieAController,);

module.exports = route;
