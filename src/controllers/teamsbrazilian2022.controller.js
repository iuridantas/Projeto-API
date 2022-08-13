const { default: mongoose } = require('mongoose');
const teamsbrazilian2022service = require('../services/teamsbrazilian2022.service');
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

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const chosenteamsbrazilian2022 = await teamsbrazilian2022service.findByIdteambrazilian2022service(idParam);

  if (!chosenteamsbrazilian2022) {
    return res.status(404).send({ message: 'Time não encontrado!' });
  }

  res.send(chosenteamsbrazilian2022);
};

const createteamsbrazilian2022controller = async (req, res) => {
  const teamsbrazilian2022 = req.body;

  if (
    !teamsbrazilian2022 ||
    !teamsbrazilian2022.time ||
    !teamsbrazilian2022.fundacao ||
    !teamsbrazilian2022.escudo ||
    !teamsbrazilian2022.mascote ||
    !teamsbrazilian2022.localizacao ||
    !teamsbrazilian2022[`titulos_brasileiro`] ||
    !teamsbrazilian2022[`titulos_libertadores`]
  ) {
    return res.status(400).send({ message: 'Envie os dados completo!' });
  }
  const newteamsbrazilian2022 = await teamsbrazilian2022service.createteamsbrazilian2022service(teamsbrazilian2022);
  res.status(201).send(newteamsbrazilian2022);
};

const updateteamsbrazilian2022controller = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  const teamsbrazilian2022Edit = req.body;

  if (
    !teamsbrazilian2022Edit ||
    !teamsbrazilian2022Edit.time ||
    !teamsbrazilian2022Edit.fundacao ||
    !teamsbrazilian2022Edit.escudo ||
    !teamsbrazilian2022Edit.mascote ||
    !teamsbrazilian2022Edit.localizacao ||
    !teamsbrazilian2022Edit.titulos_brasileiro ||
    !teamsbrazilian2022Edit.titulos_libertadores
  ) {
    return res.status(400).send({ message: 'Envie os dados completo!' });
  }

  const updatedteamsbrazilian2022 = await teamsbrazilian2022service.updateteamsbrazilian2022service(idParam, teamsbrazilian2022Edit);
  res.send(updatedteamsbrazilian2022);
};

const deleteteamsbrazilian2022controller = async (req, res) => {
  const idParam = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  await teamsbrazilian2022service.deleteteamsbrazilian2022service(idParam);

  res.send({ message: 'Time deletado com sucesso!' });
};

module.exports = {
  findALLteamsbrazilian2022controller,
  findByIdteambrazilian2022controller,
  createteamsbrazilian2022controller,
  updateteamsbrazilian2022controller,
  deleteteamsbrazilian2022controller,
};
