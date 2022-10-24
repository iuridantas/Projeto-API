const teamsbrazilian2022SerieB = require('./teamsbrazilian2022SerieB.model')

const findALLTeamsbrazilian2022SerieBService = async () => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieB.find();
  return teamsbrazilian2022;
};

const findByIdTeambrazilian2022SerieBService = async (idParam) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieB.find({_id: idParam});
  return teamsbrazilian2022;
};

const findSearchTeamsbrazilian2022SerieBService = async (name) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieB.findOne({ name: name });
  return teamsbrazilian2022;
};

const createTeamsbrazilian2022SerieBService = async (newteamsbrazilian2022) => {
  const teamsbrazilian2022created = await teamsbrazilian2022SerieB.create(newteamsbrazilian2022)
  return teamsbrazilian2022created;
};

const updateTeamsbrazilian2022SerieBService = async (idParam, teamsbrazilian2022Edit) => {
  const teamsbrazilian2022update = await teamsbrazilian2022SerieB.findByIdAndUpdate(idParam, teamsbrazilian2022Edit)
  return teamsbrazilian2022update;
};

const deleteTeamsbrazilian2022SerieBService = async (idParam) => {
  return await teamsbrazilian2022SerieB.findByIdAndDelete(idParam)
};

module.exports = {
  findALLTeamsbrazilian2022SerieBService,
  findByIdTeambrazilian2022SerieBService,
  createTeamsbrazilian2022SerieBService,
  updateTeamsbrazilian2022SerieBService,
  deleteTeamsbrazilian2022SerieBService,
  findSearchTeamsbrazilian2022SerieBService,
};