const { default: mongoose } = require('mongoose');
const serviceTeamsbrazilian2022SerieA = require('./teamsbrazilian2022SerieA.service');
const mongooose = require('mongoose');

const findALLTeamsbrazilian2022SerieAController = async (req, res) => {
  const teamsbrazilian2022 = await serviceTeamsbrazilian2022SerieA.findALLTeamsbrazilian2022SerieAService();

  if (teamsbrazilian2022.length === 0) {
    return res.status(404).send({ message: 'Não possui time cadastrado!' });
  }

  res.send(teamsbrazilian2022);
};

const findByIdTeambrazilian2022SerieAController = async (req, res) => {
  const idParam = req.params.id;

  const chosenteamsbrazilian2022 = await serviceTeamsbrazilian2022SerieA.findByIdTeambrazilian2022SerieAService(idParam);

  if (!chosenteamsbrazilian2022) {
    return res.status(404).send({ message: 'Time não encontrado!' });
  }

  res.send(chosenteamsbrazilian2022);
};

const findSearchTeamsbrazilian2022SerieAController = async (req, res) => {
  const name = req.query.name;

  const characterteamsbrazilian2022 =
    await serviceTeamsbrazilian2022SerieA.findSearchTeamsbrazilian2022SerieAService(name);

  if (!characterteamsbrazilian2022) {
    return res.status(404).send({ message: 'time não encontrado!' });
  }

  res.send(characterteamsbrazilian2022);
};

const createTeamsbrazilian2022SerieAController = async (req, res) => {
  const teamsbrazilian2022 = req.body;

  const newteamsbrazilian2022 = await serviceTeamsbrazilian2022SerieA.createTeamsbrazilian2022SerieAService(teamsbrazilian2022);
  res.status(201).send(newteamsbrazilian2022);
};

const updateTeamsbrazilian2022SerieAController = async (req, res) => {
  const idParam = req.params.id;

  const teamsbrazilian2022Edit = req.body;

  const updatedteamsbrazilian2022 = await serviceTeamsbrazilian2022SerieA.updateTeamsbrazilian2022SerieAService(idParam, teamsbrazilian2022Edit);
  res.send(updatedteamsbrazilian2022);
};

const deleteTeamsbrazilian2022SerieAController = async (req, res) => {
  const idParam = req.params.id;

  await serviceTeamsbrazilian2022SerieA.deleteTeamsbrazilian2022SerieAService(idParam);

  res.send({ message: 'Time deletado com sucesso!' });
};

module.exports = {
  findALLTeamsbrazilian2022SerieAController,
  findByIdTeambrazilian2022SerieAController,
  createTeamsbrazilian2022SerieAController,
  updateTeamsbrazilian2022SerieAController,
  deleteTeamsbrazilian2022SerieAController,
  findSearchTeamsbrazilian2022SerieAController,
};
