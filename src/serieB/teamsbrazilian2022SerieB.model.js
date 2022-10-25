const mongooose = require('mongoose');

const teamsbrazilian2022SerieBSchema= new mongooose.Schema({
  name: { type: String, required: true },
  foundation: { type: Number, required: true },
  shield: { type: String, required: true },
  mascot: { type: String, required: true },
  localization: { type: String, required: true },
});

const teamsbrazilian2022SerieB = mongooose.model('Serie_B',teamsbrazilian2022SerieBSchema,);

module.exports = teamsbrazilian2022SerieB;