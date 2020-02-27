const { User, Movie, ReviewList } = require('../models/index');

// API KEY =  ee55e28c81ef2d96e16ed4fd23a15778
class Controller{
    static home(req, res) {
        Movie.findAll({ limit: 5, include: User })
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.send(err);
            });
    }
    static movieList(req, res) {
        Movie.findAll()
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.send(err);
            });
    }
    static showMovie(req, res) {
        let movieId = Number(req.params.movieId);
        Movie.findOne({ where: { id: movieId }, include: ReviewList })
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.send(err);
            });

    }
}

module.exports = Controller