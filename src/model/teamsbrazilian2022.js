const mongooose = require('mongoose');

const teamsbrazilian2022Schema = new mongooose.Schema({
  time: { type: String, required: true },
  fundacao: { type: Number, required: true },
  escudo: { type: String, required: true },
  mascote: { type: String, required: true },
  localizacao: { type: String, required: true },
  titulos_brasileiro: { type: Number, required: true },
  titulos_libertadores: { type: Number, required: true },
});

const teamsbrazilian2022 = mongooose.model(
  'teamsbrazilian2022',
  teamsbrazilian2022Schema,
);

module.exports = teamsbrazilian2022;
