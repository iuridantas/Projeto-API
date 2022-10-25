const teamsbrazilian2022SerieDGrupo5 = require('./teamsbrazilian2022SerieDGrupo5.model')

const findALLTeamsbrazilian2022SerieDGrupo5Service = async () => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo5.find();
  return teamsbrazilian2022;
};

const findByIdTeambrazilian2022SerieDGrupo5Service = async (idParam) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo5.find({_id: idParam});
  return teamsbrazilian2022;
};

const findSearchTeamsbrazilian2022SerieDGrupo5Service = async (name) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo5.findOne({ name: name });
  return teamsbrazilian2022;
};

const createTeamsbrazilian2022SerieDGrupo5Service = async (newteamsbrazilian2022) => {
  const teamsbrazilian2022created = await teamsbrazilian2022SerieDGrupo5.create(newteamsbrazilian2022)
  return teamsbrazilian2022created;
};

const updateTeamsbrazilian2022SerieDGrupo5Service = async (idParam, teamsbrazilian2022Edit) => {
  const teamsbrazilian2022update = await teamsbrazilian2022SerieDGrupo5.findByIdAndUpdate(idParam, teamsbrazilian2022Edit)
  return teamsbrazilian2022update;
};

const deleteTeamsbrazilian2022SerieDGrupo5Service = async (idParam) => {
  return await teamsbrazilian2022SerieDGrupo5.findByIdAndDelete(idParam)
};

module.exports = {
  findALLTeamsbrazilian2022SerieDGrupo5Service,
  findByIdTeambrazilian2022SerieDGrupo5Service,
  createTeamsbrazilian2022SerieDGrupo5Service,
  updateTeamsbrazilian2022SerieDGrupo5Service,
  deleteTeamsbrazilian2022SerieDGrupo5Service,
  findSearchTeamsbrazilian2022SerieDGrupo5Service,
};