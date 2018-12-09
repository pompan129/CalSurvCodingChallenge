const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const Rating = require("../models").Rating;

module.exports = {
  list(req, res) {
    return Rating.findAll({
      where: { averagerating: { [Op.gt]: 9.9 }, numvotes: { [Op.gt]: 40 } }
    })
      .then(ratings => res.status(200).send(ratings))
      .catch(error => res.status(400).send(error));
  }
};
