const Teamsbrazilian2022 = require('./teamsbrazilian2022.model')

const findALLteamsbrazilian2022service = async () => {
  const teamsbrazilian2022 = await Teamsbrazilian2022.find();
  return teamsbrazilian2022;
};

const findByIdteambrazilian2022service = async (idParam) => {
  const teamsbrazilian2022 = await Teamsbrazilian2022.find({_id: idParam});
  return teamsbrazilian2022;
};

const findsearchteamsbrazilian2022service = async (name) => {
  const teamsbrazilian2022 = await Teamsbrazilian2022.findOne({ name: name });
  return teamsbrazilian2022;
};

const createteamsbrazilian2022service = async (newteamsbrazilian2022) => {
  const teamsbrazilian2022created = await Teamsbrazilian2022.create(newteamsbrazilian2022)
  return teamsbrazilian2022created;
};

const updateteamsbrazilian2022service = async (idParam, teamsbrazilian2022Edit) => {
  const teamsbrazilian2022update = await Teamsbrazilian2022.findByIdAndUpdate(idParam, teamsbrazilian2022Edit)
  return teamsbrazilian2022update;
};

const deleteteamsbrazilian2022service = async (idParam) => {
  return await Teamsbrazilian2022.findByIdAndDelete(idParam)
};

module.exports = {
  findALLteamsbrazilian2022service,
  findByIdteambrazilian2022service,
  createteamsbrazilian2022service,
  updateteamsbrazilian2022service,
  deleteteamsbrazilian2022service,
  findsearchteamsbrazilian2022service,
};
