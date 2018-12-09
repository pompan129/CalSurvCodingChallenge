const ratingsController = require('../controllers').ratings;
const titlesController = require('../controllers').titles;


module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
      message: 'Welcome to the UCD API!',
    }));

    app.get('/:type/year/:startyear', titlesController.listByYear);
    app.get('/:type/genre/:genre', titlesController.listGenreBy);
   
}  