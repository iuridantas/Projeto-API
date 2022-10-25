const { default: mongoose } = require('mongoose');
const serviceTeamsbrazilian2022SerieDGrupo8 = require('./teamsbrazilian2022SerieDGrupo8.service');
const mongooose = require('mongoose');

const findALLTeamsbrazilian2022SerieDGrupo8Controller = async (req, res) => {
  const teamsbrazilian2022 = await serviceTeamsbrazilian2022SerieDGrupo8.findALLTeamsbrazilian2022SerieDGrupo8Service();

  if (teamsbrazilian2022.length === 0) {
    return res.status(404).send({ message: 'Não possui time cadastrado!' });
  }

  res.send(teamsbrazilian2022);
};

const findByIdTeambrazilian2022SerieDGrupo8Controller = async (req, res) => {
  const idParam = req.params.id;

  const chosenteamsbrazilian2022 = await serviceTeamsbrazilian2022SerieDGrupo8.findByIdTeambrazilian2022SerieDGrupo8Service(idParam);

  if (!chosenteamsbrazilian2022) {
    return res.status(404).send({ message: 'Time não encontrado!' });
  }

  res.send(chosenteamsbrazilian2022);
};

const findSearchTeamsbrazilian2022SerieDGrupo8Controller = async (req, res) => {
  const name = req.query.name;

  const characterteamsbrazilian2022 =
    await serviceTeamsbrazilian2022SerieDGrupo8.findSearchTeamsbrazilian2022SerieDGrupo8Service(name);

  if (!characterteamsbrazilian2022) {
    return res.status(404).send({ message: 'time não encontrado!' });
  }

  res.send(characterteamsbrazilian2022);
};

const createTeamsbrazilian2022SerieDGrupo8Controller = async (req, res) => {
  const teamsbrazilian2022 = req.body;

  const newteamsbrazilian2022 = await serviceTeamsbrazilian2022SerieDGrupo8.createTeamsbrazilian2022SerieDGrupo8Service(teamsbrazilian2022);
  res.status(201).send(newteamsbrazilian2022);
};

const updateTeamsbrazilian2022SerieDGrupo8Controller = async (req, res) => {
  const idParam = req.params.id;

  const teamsbrazilian2022Edit = req.body;

  const updatedteamsbrazilian2022 = await serviceTeamsbrazilian2022SerieDGrupo8.updateTeamsbrazilian2022SerieDGrupo8Service(idParam, teamsbrazilian2022Edit);
  res.send(updatedteamsbrazilian2022);
};

const deleteTeamsbrazilian2022SerieDGrupo8Controller = async (req, res) => {
  const idParam = req.params.id;

  await serviceTeamsbrazilian2022SerieDGrupo8.deleteTeamsbrazilian2022SerieDGrupo8Service(idParam);

  res.send({ message: 'Time deletado com sucesso!' });
};

module.exports = {
  findALLTeamsbrazilian2022SerieDGrupo8Controller,
  findByIdTeambrazilian2022SerieDGrupo8Controller,
  createTeamsbrazilian2022SerieDGrupo8Controller,
  updateTeamsbrazilian2022SerieDGrupo8Controller,
  deleteTeamsbrazilian2022SerieDGrupo8Controller,
  findSearchTeamsbrazilian2022SerieDGrupo8Controller,
};
