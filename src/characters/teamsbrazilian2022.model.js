const mongooose = require('mongoose');

const teamsbrazilian2022Schema = new mongooose.Schema({
  name: { type: String, required: true },
  foundation: { type: Number, required: true },
  shield: { type: String, required: true },
  mascot: { type: String, required: true },
  localization: { type: String, required: true },
});

const teamsbrazilian2022 = mongooose.model('teamsbrazilian2022',teamsbrazilian2022Schema,);

module.exports = teamsbrazilian2022;