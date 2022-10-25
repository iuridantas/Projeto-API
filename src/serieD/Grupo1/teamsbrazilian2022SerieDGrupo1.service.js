const teamsbrazilian2022SerieDGrupo1 = require('./teamsbrazilian2022SerieDGrupo1.model')

const findALLTeamsbrazilian2022SerieDGrupo1Service = async () => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo1.find();
  return teamsbrazilian2022;
};

const findByIdTeambrazilian2022SerieDGrupo1Service = async (idParam) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo1.find({_id: idParam});
  return teamsbrazilian2022;
};

const findSearchTeamsbrazilian2022SerieDGrupo1Service = async (name) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo1.findOne({ name: name });
  return teamsbrazilian2022;
};

const createTeamsbrazilian2022SerieDGrupo1Service = async (newteamsbrazilian2022) => {
  const teamsbrazilian2022created = await teamsbrazilian2022SerieDGrupo1.create(newteamsbrazilian2022)
  return teamsbrazilian2022created;
};

const updateTeamsbrazilian2022SerieDGrupo1Service = async (idParam, teamsbrazilian2022Edit) => {
  const teamsbrazilian2022update = await teamsbrazilian2022SerieDGrupo1.findByIdAndUpdate(idParam, teamsbrazilian2022Edit)
  return teamsbrazilian2022update;
};

const deleteTeamsbrazilian2022SerieDGrupo1Service = async (idParam) => {
  return await teamsbrazilian2022SerieDGrupo1.findByIdAndDelete(idParam)
};

module.exports = {
  findALLTeamsbrazilian2022SerieDGrupo1Service,
  findByIdTeambrazilian2022SerieDGrupo1Service,
  createTeamsbrazilian2022SerieDGrupo1Service,
  updateTeamsbrazilian2022SerieDGrupo1Service,
  deleteTeamsbrazilian2022SerieDGrupo1Service,
  findSearchTeamsbrazilian2022SerieDGrupo1Service,
};