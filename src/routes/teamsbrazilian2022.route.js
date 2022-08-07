const route = require('express').Router();
const controllerteamsbrazilian2022 = require('../controllers/teamsbrazilian2022.controller');

route.get(
  '/find-teamsbrazilian2022',
  controllerteamsbrazilian2022.findALLteamsbrazilian2022controller,
);
route.get(
  '/teamsbrazilian2022/:id',
  controllerteamsbrazilian2022.findByIdteambrazilian2022controller,
);
route.post(
  '/create',
  controllerteamsbrazilian2022.createteamsbrazilian2022controller,
);
route.put(
  '/update/:id',
  controllerteamsbrazilian2022.updateteamsbrazilian2022controller,
);
route.delete(
  '/delete/:id',
  controllerteamsbrazilian2022.deleteteamsbrazilian2022controller,
);

module.exports = route;
