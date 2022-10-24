const mongooose = require('mongoose');

const teamsbrazilian2022SerieASchema= new mongooose.Schema({
  name: { type: String, required: true },
  foundation: { type: Number, required: true },
  shield: { type: String, required: true },
  mascot: { type: String, required: true },
  localization: { type: String, required: true },
});

const teamsbrazilian2022SerieB = mongooose.model('Serie_B',teamsbrazilian2022SerieASchema,);

module.exports = teamsbrazilian2022SerieB;