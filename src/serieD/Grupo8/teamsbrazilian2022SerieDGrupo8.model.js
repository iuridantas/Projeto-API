const mongooose = require('mongoose');

const teamsbrazilian2022SerieDGrupo8Schema= new mongooose.Schema({
  name: { type: String, required: true },
  foundation: { type: Number, required: true },
  shield: { type: String, required: true },
  mascot: { type: String, required: true },
  localization: { type: String, required: true },
});

const teamsbrazilian2022SerieDGrupo8 = mongooose.model('Serie_D8',teamsbrazilian2022SerieDGrupo8Schema,);

module.exports = teamsbrazilian2022SerieDGrupo8;