const { default: mongoose } = require('mongoose');
const serviceTeamsbrazilian2022SerieB = require('./teamsbrazilian2022SerieB.service');
const mongooose = require('mongoose');

const findALLTeamsbrazilian2022SerieBController = async (req, res) => {
  const teamsbrazilian2022 = await serviceTeamsbrazilian2022SerieB.findALLTeamsbrazilian2022SerieBService();

  if (teamsbrazilian2022.length === 0) {
    return res.status(404).send({ message: 'Não possui time cadastrado!' });
  }

  res.send(teamsbrazilian2022);
};

const findByIdTeambrazilian2022SerieBController = async (req, res) => {
  const idParam = req.params.id;

  const chosenteamsbrazilian2022 = await serviceTeamsbrazilian2022SerieB.findByIdTeambrazilian2022SerieBService(idParam);

  if (!chosenteamsbrazilian2022) {
    return res.status(404).send({ message: 'Time não encontrado!' });
  }

  res.send(chosenteamsbrazilian2022);
};

const findSearchTeamsbrazilian2022SerieBController = async (req, res) => {
  const name = req.query.name;

  const characterteamsbrazilian2022 =
    await serviceTeamsbrazilian2022SerieB.findSearchTeamsbrazilian2022SerieBService(name);

  if (!characterteamsbrazilian2022) {
    return res.status(404).send({ message: 'time não encontrado!' });
  }

  res.send(characterteamsbrazilian2022);
};

const createTeamsbrazilian2022SerieBController = async (req, res) => {
  const teamsbrazilian2022 = req.body;

  const newteamsbrazilian2022 = await serviceTeamsbrazilian2022SerieB.createTeamsbrazilian2022SerieBService(teamsbrazilian2022);
  res.status(201).send(newteamsbrazilian2022);
};

const updateTeamsbrazilian2022SerieBController = async (req, res) => {
  const idParam = req.params.id;

  const teamsbrazilian2022Edit = req.body;

  const updatedteamsbrazilian2022 = await serviceTeamsbrazilian2022SerieB.updateTeamsbrazilian2022SerieBService(idParam, teamsbrazilian2022Edit);
  res.send(updatedteamsbrazilian2022);
};

const deleteTeamsbrazilian2022SerieBController = async (req, res) => {
  const idParam = req.params.id;

  await serviceTeamsbrazilian2022SerieB.deleteTeamsbrazilian2022SerieBService(idParam);

  res.send({ message: 'Time deletado com sucesso!' });
};

module.exports = {
  findALLTeamsbrazilian2022SerieBController,
  findByIdTeambrazilian2022SerieBController,
  createTeamsbrazilian2022SerieBController,
  updateTeamsbrazilian2022SerieBController,
  deleteTeamsbrazilian2022SerieBController,
  findSearchTeamsbrazilian2022SerieBController,
};
