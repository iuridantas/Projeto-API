const teamsbrazilian2022SerieDGrupo8 = require('./teamsbrazilian2022SerieDGrupo8.model')

const findALLTeamsbrazilian2022SerieDGrupo8Service = async () => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo8.find();
  return teamsbrazilian2022;
};

const findByIdTeambrazilian2022SerieDGrupo8Service = async (idParam) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo8.find({_id: idParam});
  return teamsbrazilian2022;
};

const findSearchTeamsbrazilian2022SerieDGrupo8Service = async (name) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo8.findOne({ name: name });
  return teamsbrazilian2022;
};

const createTeamsbrazilian2022SerieDGrupo8Service = async (newteamsbrazilian2022) => {
  const teamsbrazilian2022created = await teamsbrazilian2022SerieDGrupo8.create(newteamsbrazilian2022)
  return teamsbrazilian2022created;
};

const updateTeamsbrazilian2022SerieDGrupo8Service = async (idParam, teamsbrazilian2022Edit) => {
  const teamsbrazilian2022update = await teamsbrazilian2022SerieDGrupo8.findByIdAndUpdate(idParam, teamsbrazilian2022Edit)
  return teamsbrazilian2022update;
};

const deleteTeamsbrazilian2022SerieDGrupo8Service = async (idParam) => {
  return await teamsbrazilian2022SerieDGrupo8.findByIdAndDelete(idParam)
};

module.exports = {
  findALLTeamsbrazilian2022SerieDGrupo8Service,
  findByIdTeambrazilian2022SerieDGrupo8Service,
  createTeamsbrazilian2022SerieDGrupo8Service,
  updateTeamsbrazilian2022SerieDGrupo8Service,
  deleteTeamsbrazilian2022SerieDGrupo8Service,
  findSearchTeamsbrazilian2022SerieDGrupo8Service,
};