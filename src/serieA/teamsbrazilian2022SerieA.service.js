const teamsbrazilian2022SerieA = require('./teamsbrazilian2022SerieA.model')

const findALLTeamsbrazilian2022SerieAService = async () => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieA.find();
  return teamsbrazilian2022;
};

const findByIdTeambrazilian2022SerieAService = async (idParam) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieA.find({_id: idParam});
  return teamsbrazilian2022;
};

const findSearchTeamsbrazilian2022SerieAService = async (name) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieA.findOne({ name: name });
  return teamsbrazilian2022;
};

const createTeamsbrazilian2022SerieAService = async (newteamsbrazilian2022) => {
  const teamsbrazilian2022created = await teamsbrazilian2022SerieA.create(newteamsbrazilian2022)
  return teamsbrazilian2022created;
};

const updateTeamsbrazilian2022SerieAService = async (idParam, teamsbrazilian2022Edit) => {
  const teamsbrazilian2022update = await teamsbrazilian2022SerieA.findByIdAndUpdate(idParam, teamsbrazilian2022Edit)
  return teamsbrazilian2022update;
};

const deleteTeamsbrazilian2022SerieAService = async (idParam) => {
  return await teamsbrazilian2022SerieA.findByIdAndDelete(idParam)
};

module.exports = {
  findALLTeamsbrazilian2022SerieAService,
  findByIdTeambrazilian2022SerieAService,
  createTeamsbrazilian2022SerieAService,
  updateTeamsbrazilian2022SerieAService,
  deleteTeamsbrazilian2022SerieAService,
  findSearchTeamsbrazilian2022SerieAService,
};