const teamsbrazilian2022SerieDGrupo3 = require('./teamsbrazilian2022SerieDGrupo3.model')

const findALLTeamsbrazilian2022SerieDGrupo3Service = async () => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo3.find();
  return teamsbrazilian2022;
};

const findByIdTeambrazilian2022SerieDGrupo3Service = async (idParam) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo3.find({_id: idParam});
  return teamsbrazilian2022;
};

const findSearchTeamsbrazilian2022SerieDGrupo3Service = async (name) => {
  const teamsbrazilian2022 = await teamsbrazilian2022SerieDGrupo3.findOne({ name: name });
  return teamsbrazilian2022;
};

const createTeamsbrazilian2022SerieDGrupo3Service = async (newteamsbrazilian2022) => {
  const teamsbrazilian2022created = await teamsbrazilian2022SerieDGrupo3.create(newteamsbrazilian2022)
  return teamsbrazilian2022created;
};

const updateTeamsbrazilian2022SerieDGrupo3Service = async (idParam, teamsbrazilian2022Edit) => {
  const teamsbrazilian2022update = await teamsbrazilian2022SerieDGrupo3.findByIdAndUpdate(idParam, teamsbrazilian2022Edit)
  return teamsbrazilian2022update;
};

const deleteTeamsbrazilian2022SerieDGrupo3Service = async (idParam) => {
  return await teamsbrazilian2022SerieDGrupo3.findByIdAndDelete(idParam)
};

module.exports = {
  findALLTeamsbrazilian2022SerieDGrupo3Service,
  findByIdTeambrazilian2022SerieDGrupo3Service,
  createTeamsbrazilian2022SerieDGrupo3Service,
  updateTeamsbrazilian2022SerieDGrupo3Service,
  deleteTeamsbrazilian2022SerieDGrupo3Service,
  findSearchTeamsbrazilian2022SerieDGrupo3Service,
};