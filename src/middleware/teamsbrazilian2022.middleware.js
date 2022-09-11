const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }
  next();
};

const validobjectBody = (req, res, next) => {
  const teamsbrazilian2022 = req.body;
  if (
    !teamsbrazilian2022 ||
    !teamsbrazilian2022.name ||
    !teamsbrazilian2022.foundation ||
    !teamsbrazilian2022.shield ||
    !teamsbrazilian2022.mascot ||
    !teamsbrazilian2022.localization
  ){
    return res.status(400).send({ message: 'Envie os dados completo!' });
  }
  next();
};

module.exports = {
  validId,
  validobjectBody,
};
