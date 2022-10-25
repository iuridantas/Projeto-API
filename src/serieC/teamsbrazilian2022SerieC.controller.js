const { default: mongoose } = require('mongoose');
const serviceTeamsbrazilian2022SerieC = require('./teamsbrazilian2022SerieC.service');
const mongooose = require('mongoose');

const findALLTeamsbrazilian2022SerieCController = async (req, res) => {
  const teamsbrazilian2022 = await serviceTeamsbrazilian2022SerieC.findALLTeamsbrazilian2022SerieCService();

  if (teamsbrazilian2022.length === 0) {
    return res.status(404).send({ message: 'Não possui time cadastrado!' });
  }

  res.send(teamsbrazilian2022);
};

const findByIdTeambrazilian2022SerieCController = async (req, res) => {
  const idParam = req.params.id;

  const chosenteamsbrazilian2022 = await serviceTeamsbrazilian2022SerieC.findByIdTeambrazilian2022SerieCService(idParam);

  if (!chosenteamsbrazilian2022) {
    return res.status(404).send({ message: 'Time não encontrado!' });
  }

  res.send(chosenteamsbrazilian2022);
};

const findSearchTeamsbrazilian2022SerieCController = async (req, res) => {
  const name = req.query.name;

  const characterteamsbrazilian2022 =
    await serviceTeamsbrazilian2022SerieC.findSearchTeamsbrazilian2022SerieCService(name);

  if (!characterteamsbrazilian2022) {
    return res.status(404).send({ message: 'time não encontrado!' });
  }

  res.send(characterteamsbrazilian2022);
};

const createTeamsbrazilian2022SerieCController = async (req, res) => {
  const teamsbrazilian2022 = req.body;

  const newteamsbrazilian2022 = await serviceTeamsbrazilian2022SerieC.createTeamsbrazilian2022SerieCService(teamsbrazilian2022);
  res.status(201).send(newteamsbrazilian2022);
};

const updateTeamsbrazilian2022SerieCController = async (req, res) => {
  const idParam = req.params.id;

  const teamsbrazilian2022Edit = req.body;

  const updatedteamsbrazilian2022 = await serviceTeamsbrazilian2022SerieC.updateTeamsbrazilian2022SerieCService(idParam, teamsbrazilian2022Edit);
  res.send(updatedteamsbrazilian2022);
};

const deleteTeamsbrazilian2022SerieCController = async (req, res) => {
  const idParam = req.params.id;

  await serviceTeamsbrazilian2022SerieC.deleteTeamsbrazilian2022SerieCService(idParam);

  res.send({ message: 'Time deletado com sucesso!' });
};

module.exports = {
  findALLTeamsbrazilian2022SerieCController,
  findByIdTeambrazilian2022SerieCController,
  createTeamsbrazilian2022SerieCController,
  updateTeamsbrazilian2022SerieCController,
  deleteTeamsbrazilian2022SerieCController,
  findSearchTeamsbrazilian2022SerieCController,
};
