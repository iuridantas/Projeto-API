const mongooose = require('mongoose');

const teamsbrazilian2022SerieDGrupo7Schema= new mongooose.Schema({
  name: { type: String, required: true },
  foundation: { type: Number, required: true },
  shield: { type: String, required: true },
  mascot: { type: String, required: true },
  localization: { type: String, required: true },
});

const teamsbrazilian2022SerieDGrupo7 = mongooose.model('Serie_D7',teamsbrazilian2022SerieDGrupo7Schema,);

module.exports = teamsbrazilian2022SerieDGrupo7;