const teamsbrazilian2022SerieDGrupo4 = require('./teamsbrazilian2022SerieDGrupo4.model')

const findALLTeamsbrazilian2022SerieDGrupo4Service = async () => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo4.find();
  return teamsbrazilian2022;
};

const findByIdTeambrazilian2022SerieDGrupo4Service = async (idParam) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo4.find({_id: idParam});
  return teamsbrazilian2022;
};

const findSearchTeamsbrazilian2022SerieDGrupo4Service = async (name) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo4.findOne({ name: name });
  return teamsbrazilian2022;
};

const createTeamsbrazilian2022SerieDGrupo4Service = async (newteamsbrazilian2022) => {
  const teamsbrazilian2022created = await teamsbrazilian2022SerieDGrupo4.create(newteamsbrazilian2022)
  return teamsbrazilian2022created;
};

const updateTeamsbrazilian2022SerieDGrupo4Service = async (idParam, teamsbrazilian2022Edit) => {
  const teamsbrazilian2022update = await teamsbrazilian2022SerieDGrupo4.findByIdAndUpdate(idParam, teamsbrazilian2022Edit)
  return teamsbrazilian2022update;
};

const deleteTeamsbrazilian2022SerieDGrupo4Service = async (idParam) => {
  return await teamsbrazilian2022SerieDGrupo4.findByIdAndDelete(idParam)
};

module.exports = {
  findALLTeamsbrazilian2022SerieDGrupo4Service,
  findByIdTeambrazilian2022SerieDGrupo4Service,
  createTeamsbrazilian2022SerieDGrupo4Service,
  updateTeamsbrazilian2022SerieDGrupo4Service,
  deleteTeamsbrazilian2022SerieDGrupo4Service,
  findSearchTeamsbrazilian2022SerieDGrupo4Service,
};