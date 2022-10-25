const { default: mongoose } = require('mongoose');
const serviceTeamsbrazilian2022SerieDGrupo2 = require('./teamsbrazilian2022SerieDGrupo2.service');
const mongooose = require('mongoose');

const findALLTeamsbrazilian2022SerieDGrupo2Controller = async (req, res) => {
  const teamsbrazilian2022 = await serviceTeamsbrazilian2022SerieDGrupo2.findALLTeamsbrazilian2022SerieDGrupo2Service();

  if (teamsbrazilian2022.length === 0) {
    return res.status(404).send({ message: 'Não possui time cadastrado!' });
  }

  res.send(teamsbrazilian2022);
};

const findByIdTeambrazilian2022SerieDGrupo2Controller = async (req, res) => {
  const idParam = req.params.id;

  const chosenteamsbrazilian2022 = await serviceTeamsbrazilian2022SerieDGrupo2.findByIdTeambrazilian2022SerieDGrupo2Service(idParam);

  if (!chosenteamsbrazilian2022) {
    return res.status(404).send({ message: 'Time não encontrado!' });
  }

  res.send(chosenteamsbrazilian2022);
};

const findSearchTeamsbrazilian2022SerieDGrupo2Controller = async (req, res) => {
  const name = req.query.name;

  const characterteamsbrazilian2022 =
    await serviceTeamsbrazilian2022SerieDGrupo2.findSearchTeamsbrazilian2022SerieDGrupo2Service(name);

  if (!characterteamsbrazilian2022) {
    return res.status(404).send({ message: 'time não encontrado!' });
  }

  res.send(characterteamsbrazilian2022);
};

const createTeamsbrazilian2022SerieDGrupo2Controller = async (req, res) => {
  const teamsbrazilian2022 = req.body;

  const newteamsbrazilian2022 = await serviceTeamsbrazilian2022SerieDGrupo2.createTeamsbrazilian2022SerieDGrupo2Service(teamsbrazilian2022);
  res.status(201).send(newteamsbrazilian2022);
};

const updateTeamsbrazilian2022SerieDGrupo2Controller = async (req, res) => {
  const idParam = req.params.id;

  const teamsbrazilian2022Edit = req.body;

  const updatedteamsbrazilian2022 = await serviceTeamsbrazilian2022SerieDGrupo2.updateTeamsbrazilian2022SerieDGrupo2Service(idParam, teamsbrazilian2022Edit);
  res.send(updatedteamsbrazilian2022);
};

const deleteTeamsbrazilian2022SerieDGrupo2Controller = async (req, res) => {
  const idParam = req.params.id;

  await serviceTeamsbrazilian2022SerieDGrupo2.deleteTeamsbrazilian2022SerieDGrupo2Service(idParam);

  res.send({ message: 'Time deletado com sucesso!' });
};

module.exports = {
  findALLTeamsbrazilian2022SerieDGrupo2Controller,
  findByIdTeambrazilian2022SerieDGrupo2Controller,
  createTeamsbrazilian2022SerieDGrupo2Controller,
  updateTeamsbrazilian2022SerieDGrupo2Controller,
  deleteTeamsbrazilian2022SerieDGrupo2Controller,
  findSearchTeamsbrazilian2022SerieDGrupo2Controller,
};
