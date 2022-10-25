const mongooose = require('mongoose');

const teamsbrazilian2022SerieDGrupo5Schema= new mongooose.Schema({
  name: { type: String, required: true },
  foundation: { type: Number, required: true },
  shield: { type: String, required: true },
  mascot: { type: String, required: true },
  localization: { type: String, required: true },
});

const teamsbrazilian2022SerieDGrupo5 = mongooose.model('Serie_D5',teamsbrazilian2022SerieDGrupo5Schema,);

module.exports = teamsbrazilian2022SerieDGrupo5;