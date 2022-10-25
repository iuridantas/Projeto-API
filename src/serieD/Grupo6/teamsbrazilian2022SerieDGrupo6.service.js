const teamsbrazilian2022SerieDGrupo6 = require('./teamsbrazilian2022SerieDGrupo6.model')

const findALLTeamsbrazilian2022SerieDGrupo6Service = async () => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo6.find();
  return teamsbrazilian2022;
};

const findByIdTeambrazilian2022SerieDGrupo6Service = async (idParam) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo6.find({_id: idParam});
  return teamsbrazilian2022;
};

const findSearchTeamsbrazilian2022SerieDGrupo6Service = async (name) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo6.findOne({ name: name });
  return teamsbrazilian2022;
};

const createTeamsbrazilian2022SerieDGrupo6Service = async (newteamsbrazilian2022) => {
  const teamsbrazilian2022created = await teamsbrazilian2022SerieDGrupo6.create(newteamsbrazilian2022)
  return teamsbrazilian2022created;
};

const updateTeamsbrazilian2022SerieDGrupo6Service = async (idParam, teamsbrazilian2022Edit) => {
  const teamsbrazilian2022update = await teamsbrazilian2022SerieDGrupo6.findByIdAndUpdate(idParam, teamsbrazilian2022Edit)
  return teamsbrazilian2022update;
};

const deleteTeamsbrazilian2022SerieDGrupo6Service = async (idParam) => {
  return await teamsbrazilian2022SerieDGrupo6.findByIdAndDelete(idParam)
};

module.exports = {
  findALLTeamsbrazilian2022SerieDGrupo6Service,
  findByIdTeambrazilian2022SerieDGrupo6Service,
  createTeamsbrazilian2022SerieDGrupo6Service,
  updateTeamsbrazilian2022SerieDGrupo6Service,
  deleteTeamsbrazilian2022SerieDGrupo6Service,
  findSearchTeamsbrazilian2022SerieDGrupo6Service,
};