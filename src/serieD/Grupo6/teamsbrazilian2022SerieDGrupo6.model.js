const mongooose = require('mongoose');

const teamsbrazilian2022SerieDGrupo6Schema= new mongooose.Schema({
  name: { type: String, required: true },
  foundation: { type: Number, required: true },
  shield: { type: String, required: true },
  mascot: { type: String, required: true },
  localization: { type: String, required: true },
});

const teamsbrazilian2022SerieDGrupo6 = mongooose.model('Serie_D6',teamsbrazilian2022SerieDGrupo6Schema,);

module.exports = teamsbrazilian2022SerieDGrupo6;