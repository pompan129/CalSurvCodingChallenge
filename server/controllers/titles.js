const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const Title = require("../models").Title;
const Rating = require("../models").Rating;

module.exports = {
  listByYear(req, res) {
    return Title.findAll({
      where: { startyear: req.params.startyear, titletype: req.params.type },
      include: [
        {
          model: Rating,
          as: "rating"
        }
      ]
    })
      .then(titles => res.status(200).json(titles)) //.reduce((a,title)=>({...a,[title.tconst]:title}),{})))
      .catch(error => res.status(400).send(error));
  },
  listGenreBy(req, res) {
    let { year, adult, title, type, sort, limit, offset } = req.query;
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

    const config = {
      where: params,
      include: [
        {
          model: Rating,
          as: "rating"
        }
      ]
    };

    if (sort) {
      const order =
        sort === "rating"
          ? ["rating", "averagerating", "DESC NULLS LAST"]
          : sort === "year"
          ? ["startyear", "DESC"]
          : sort === "genre"
          ? ["genres", "ASC"]
          : ["primarytitle", "ASC"];

      config.order = [order];
    }

    if (limit) {
      config.limit = limit;
    }
    if (offset) {
      config.offset = offset;
    }

    return Title.findAll(config)
      .then(titles => res.status(200).json(titles)) //.reduce((a,title)=>({...a,[title.tconst]:title}),{})))
      .catch(error => res.status(400).send(error));
  }
};
