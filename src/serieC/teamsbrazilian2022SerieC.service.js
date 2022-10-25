const teamsbrazilian2022SerieC = require('./teamsbrazilian2022SerieC.model')

const findALLTeamsbrazilian2022SerieCService = async () => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieC.find();
  return teamsbrazilian2022;
};

const findByIdTeambrazilian2022SerieCService = async (idParam) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieC.find({_id: idParam});
  return teamsbrazilian2022;
};

const findSearchTeamsbrazilian2022SerieCService = async (name) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieC.findOne({ name: name });
  return teamsbrazilian2022;
};

const createTeamsbrazilian2022SerieCService = async (newteamsbrazilian2022) => {
  const teamsbrazilian2022created = await teamsbrazilian2022SerieC.create(newteamsbrazilian2022)
  return teamsbrazilian2022created;
};

const updateTeamsbrazilian2022SerieCService = async (idParam, teamsbrazilian2022Edit) => {
  const teamsbrazilian2022update = await teamsbrazilian2022SerieC.findByIdAndUpdate(idParam, teamsbrazilian2022Edit)
  return teamsbrazilian2022update;
};

const deleteTeamsbrazilian2022SerieCService = async (idParam) => {
  return await teamsbrazilian2022SerieC.findByIdAndDelete(idParam)
};

module.exports = {
  findALLTeamsbrazilian2022SerieCService,
  findByIdTeambrazilian2022SerieCService,
  createTeamsbrazilian2022SerieCService,
  updateTeamsbrazilian2022SerieCService,
  deleteTeamsbrazilian2022SerieCService,
  findSearchTeamsbrazilian2022SerieCService,
};