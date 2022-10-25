const teamsbrazilian2022SerieDGrupo7 = require('./teamsbrazilian2022SerieDGrupo7.model')

const findALLTeamsbrazilian2022SerieDGrupo7Service = async () => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo7.find();
  return teamsbrazilian2022;
};

const findByIdTeambrazilian2022SerieDGrupo7Service = async (idParam) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo7.find({_id: idParam});
  return teamsbrazilian2022;
};

const findSearchTeamsbrazilian2022SerieDGrupo7Service = async (name) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo7.findOne({ name: name });
  return teamsbrazilian2022;
};

const createTeamsbrazilian2022SerieDGrupo7Service = async (newteamsbrazilian2022) => {
  const teamsbrazilian2022created = await teamsbrazilian2022SerieDGrupo7.create(newteamsbrazilian2022)
  return teamsbrazilian2022created;
};

const updateTeamsbrazilian2022SerieDGrupo7Service = async (idParam, teamsbrazilian2022Edit) => {
  const teamsbrazilian2022update = await teamsbrazilian2022SerieDGrupo7.findByIdAndUpdate(idParam, teamsbrazilian2022Edit)
  return teamsbrazilian2022update;
};

const deleteTeamsbrazilian2022SerieDGrupo7Service = async (idParam) => {
  return await teamsbrazilian2022SerieDGrupo7.findByIdAndDelete(idParam)
};

module.exports = {
  findALLTeamsbrazilian2022SerieDGrupo7Service,
  findByIdTeambrazilian2022SerieDGrupo7Service,
  createTeamsbrazilian2022SerieDGrupo7Service,
  updateTeamsbrazilian2022SerieDGrupo7Service,
  deleteTeamsbrazilian2022SerieDGrupo7Service,
  findSearchTeamsbrazilian2022SerieDGrupo7Service,
};