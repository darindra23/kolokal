const routes = require("express").Router();
const Controller = require("../controllers");

const checkLogin = (req, res, next) => {
    if (!req.session.user) {
        console.log(req.session.user);
        res.redirect('/login');
    } else {
        next();
    }
}

routes.get("/", Controller.home);
routes.get("/register", Controller.register);
routes.post("/register", Controller.registerData);
routes.get("/login", Controller.login);
routes.post("/login", Controller.loginData);
routes.get('/movieslist', Controller.movieList);
routes.get('/movies/:movieId', Controller.showMovie);
routes.get('/user/:userId', checkLogin, Controller.user);
routes.get('/movies/addwatchlist/:movieId/:userId', checkLogin, Controller.addWatchList);

module.exports = routes;