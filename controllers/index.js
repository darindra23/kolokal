const { User, Movie, Watchlist } = require('../models/index');

// API KEY =  ee55e28c81ef2d96e16ed4fd23a15778
class Controller {
    static home(req, res) {
        Movie.findAll({ limit: 5, order : [['id','ASC']] })
            .then(data => {
                res.render("home", { data });
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
    static user(req, res) {
        let option = {
            where: {
                id: Number(req.params.userId)
            },
            include: Movie
        }
        User.findOne(option)
            .then(data => {
                res.send(data);
            }).catch(err => {
                res.send(err);
            });
    }
    static addWatchList(req, res) {
        let option = {
            UserId: req.params.userId,
            MovieId: req.params.movieId
        }
        Watchlist.create(option)
            .then(() => {
                res.send('Berhasil')
            }).catch(err => {
                res.send(err);
            });
    }
    static login(req, res) {
        res.render("login");
    }
    static loginData(req, res) {
        res.send(req.body);
    }
    static register(req, res) {
        res.render("register");
    }
    static registerData(req, res) {
        let obj = {
            first_name: req.body.firstname,
            last_name: req.body.lastname,
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }
        User.create(obj)
            .then(() => {
                res.redirect('/');
            }).catch(err => {
                res.send(err);
            });
        // res.send(req.body);
    }
}

module.exports = Controller;