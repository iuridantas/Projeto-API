const mongooose = require('mongoose');

const teamsbrazilian2022SerieDGrupo3Schema= new mongooose.Schema({
  name: { type: String, required: true },
  foundation: { type: Number, required: true },
  shield: { type: String, required: true },
  mascot: { type: String, required: true },
  localization: { type: String, required: true },
});

const teamsbrazilian2022SerieDGrupo3 = mongooose.model('Serie_D3',teamsbrazilian2022SerieDGrupo3Schema,);

module.exports = teamsbrazilian2022SerieDGrupo3;