const teamsbrazilian2022service = require('../services/teamsbrazilian2022.service');

const findALLteamsbrazilian2022controller = (req, res) => {
  const teamsbrazilian2022 =
    teamsbrazilian2022service.findALLteamsbrazilian2022service();
  res.send(teamsbrazilian2022);
};

const findByIdteambrazilian2022controller = (req, res) => {
  const idParam = Number(req.params.id);
  const chosenteamsbrazilian2022 =
    teamsbrazilian2022service.findByIdteambrazilian2022service(idParam);
  res.send(chosenteamsbrazilian2022);
};

const createteamsbrazilian2022controller = (req, res) => {
  const teamsbrazilian2022 = req.body;
  const newteamsbrazilian2022 =
    teamsbrazilian2022service.createteamsbrazilian2022service(
      teamsbrazilian2022,
    );
  res.send(newteamsbrazilian2022);
};

const updateteamsbrazilian2022controller = (req, res) => {
  const idParam = Number(req.params.id);
  const teamsbrazilian2022Edit = req.body;
  const updatedteamsbrazilian2022 =
    teamsbrazilian2022service.updateteamsbrazilian2022service(
      idParam,
      teamsbrazilian2022Edit,
    );
  res.send(updatedteamsbrazilian2022);
};

const deleteteamsbrazilian2022controller = (req, res) => {
  const idParam = req.params.id;
  teamsbrazilian2022service.deleteteamsbrazilian2022service(idParam);
  res.send({ message: 'Time deletado com sucesso!' });
};

module.exports = {
  findALLteamsbrazilian2022controller,
  findByIdteambrazilian2022controller,
  createteamsbrazilian2022controller,
  updateteamsbrazilian2022controller,
  deleteteamsbrazilian2022controller,
};
