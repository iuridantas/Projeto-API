const mongoose = require('mongoose');

const connecttodatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/teamsbrazilian2022-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDb Conectado!'))
    .catch((error) => console.log(`Não conectado, erro: ${error}`));
};

module.exports = connecttodatabase;
