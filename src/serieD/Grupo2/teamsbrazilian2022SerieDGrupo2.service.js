const teamsbrazilian2022SerieDGrupo2 = require('./teamsbrazilian2022SerieDGrupo2.model')

const findALLTeamsbrazilian2022SerieDGrupo2Service = async () => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo2.find();
  return teamsbrazilian2022;
};

const findByIdTeambrazilian2022SerieDGrupo2Service = async (idParam) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo2.find({_id: idParam});
  return teamsbrazilian2022;
};

const findSearchTeamsbrazilian2022SerieDGrupo2Service = async (name) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo2.findOne({ name: name });
  return teamsbrazilian2022;
};

const createTeamsbrazilian2022SerieDGrupo2Service = async (newteamsbrazilian2022) => {
  const teamsbrazilian2022created = await teamsbrazilian2022SerieDGrupo2.create(newteamsbrazilian2022)
  return teamsbrazilian2022created;
};

const updateTeamsbrazilian2022SerieDGrupo2Service = async (idParam, teamsbrazilian2022Edit) => {
  const teamsbrazilian2022update = await teamsbrazilian2022SerieDGrupo2.findByIdAndUpdate(idParam, teamsbrazilian2022Edit)
  return teamsbrazilian2022update;
};

const deleteTeamsbrazilian2022SerieDGrupo2Service = async (idParam) => {
  return await teamsbrazilian2022SerieDGrupo2.findByIdAndDelete(idParam)
};

module.exports = {
  findALLTeamsbrazilian2022SerieDGrupo2Service,
  findByIdTeambrazilian2022SerieDGrupo2Service,
  createTeamsbrazilian2022SerieDGrupo2Service,
  updateTeamsbrazilian2022SerieDGrupo2Service,
  deleteTeamsbrazilian2022SerieDGrupo2Service,
  findSearchTeamsbrazilian2022SerieDGrupo2Service,
};