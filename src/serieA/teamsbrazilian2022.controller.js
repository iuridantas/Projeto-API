const { default: mongoose } = require('mongoose');
const teamsbrazilian2022service = require('./teamsbrazilian2022.service');
const mongooose = require('mongoose');

const findALLteamsbrazilian2022controller = async (req, res) => {
  const teamsbrazilian2022 = await teamsbrazilian2022service.findALLteamsbrazilian2022service();

  if (teamsbrazilian2022.length === 0) {
    return res.status(404).send({ message: 'Não possui time cadastrado!' });
  }

  res.send(teamsbrazilian2022);
};

const findByIdteambrazilian2022controller = async (req, res) => {
  const idParam = req.params.id;

  const chosenteamsbrazilian2022 = await teamsbrazilian2022service.findByIdteambrazilian2022service(idParam);

  if (!chosenteamsbrazilian2022) {
    return res.status(404).send({ message: 'Time não encontrado!' });
  }

  res.send(chosenteamsbrazilian2022);
};

const findsearchteamsbrazilian2022controller = async (req, res) => {
  const name = req.query.name;

  const characterteamsbrazilian2022 =
    await teamsbrazilian2022service.findsearchteamsbrazilian2022service(name);

  if (!characterteamsbrazilian2022) {
    return res.status(404).send({ message: 'time não encontrado!' });
  }

  res.send(characterteamsbrazilian2022);
};

const createteamsbrazilian2022controller = async (req, res) => {
  const teamsbrazilian2022 = req.body;

  const newteamsbrazilian2022 = await teamsbrazilian2022service.createteamsbrazilian2022service(teamsbrazilian2022);
  res.status(201).send(newteamsbrazilian2022);
};

const updateteamsbrazilian2022controller = async (req, res) => {
  const idParam = req.params.id;

  const teamsbrazilian2022Edit = req.body;

  const updatedteamsbrazilian2022 = await teamsbrazilian2022service.updateteamsbrazilian2022service(idParam, teamsbrazilian2022Edit);
  res.send(updatedteamsbrazilian2022);
};

const deleteteamsbrazilian2022controller = async (req, res) => {
  const idParam = req.params.id;

  await teamsbrazilian2022service.deleteteamsbrazilian2022service(idParam);

  res.send({ message: 'Time deletado com sucesso!' });
};

module.exports = {
  findALLteamsbrazilian2022controller,
  findByIdteambrazilian2022controller,
  createteamsbrazilian2022controller,
  updateteamsbrazilian2022controller,
  deleteteamsbrazilian2022controller,
  findsearchteamsbrazilian2022controller,
};
