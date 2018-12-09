const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const Title = require("../models").Title;

module.exports = {
  listByYear(req, res) {
    return Title.findAll({
      where: { startyear: req.params.startyear, titletype: req.params.type}
    })
      .then(titles => res.status(200).json(titles)) //.reduce((a,title)=>({...a,[title.tconst]:title}),{})))
      .catch(error => res.status(400).send(error));
  },
  listGenreBy(req, res) {
    let { year, adult, title, type } = req.query;
    let genre = req.params.genre;
    genre = genre.charAt(0).toUpperCase() + genre.slice(1);

    const params = { genres: { [Op.like]: `%${genre}%` } };
    if (year) {
      params.startyear = year;
    }
    if (title) {
      params.primarytitle = title;
    }
    if (adult) {
      params.isadult = adult;
    }
    if (type) {
      params.titletype = type;
    }

    return Title.findAll({
      where: params
    })
      .then(titles => res.status(200).json(titles)) //.reduce((a,title)=>({...a,[title.tconst]:title}),{})))
      .catch(error => res.status(400).send(error));
  }
};
