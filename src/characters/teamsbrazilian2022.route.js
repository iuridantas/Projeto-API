const route = require('express').Router();
const controllerteamsbrazilian2022 = require('./teamsbrazilian2022.controller');
const {validId,validobjectBody,} = require('../middleware/teamsbrazilian2022.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

route.use('/api-docs', swaggerUi.serve);
route.get('/api-docs', swaggerUi.setup(swaggerDocument));

route.get('/',controllerteamsbrazilian2022.findALLteamsbrazilian2022controller,);
route.get('/find/:id',validId,controllerteamsbrazilian2022.findByIdteambrazilian2022controller,);
route.post('/create',validobjectBody,controllerteamsbrazilian2022.createteamsbrazilian2022controller,);
route.put('/update/:id',validId,validobjectBody,controllerteamsbrazilian2022.updateteamsbrazilian2022controller,);
route.delete('/delete/:id',validId,controllerteamsbrazilian2022.deleteteamsbrazilian2022controller,);
route.get('/search',controllerteamsbrazilian2022.findsearchteamsbrazilian2022controller,);

module.exports = route;
