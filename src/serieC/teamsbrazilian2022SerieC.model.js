const mongooose = require('mongoose');

const teamsbrazilian2022SerieCSchema= new mongooose.Schema({
  name: { type: String, required: true },
  foundation: { type: Number, required: true },
  shield: { type: String, required: true },
  mascot: { type: String, required: true },
  localization: { type: String, required: true },
});

const teamsbrazilian2022SerieC = mongooose.model('Serie_C',teamsbrazilian2022SerieCSchema,);

module.exports = teamsbrazilian2022SerieC;