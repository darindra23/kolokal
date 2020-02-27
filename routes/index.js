const routes = require("express").Router();
const Controller = require("../controllers");



routes.get("/", Controller.home);
routes.get("/register", Controller.register);
routes.post("/register", Controller.registerData);
routes.get("/login", Controller.login);
routes.post("/login", Controller.loginData);
routes.get('/movieslist', Controller.movieList);
routes.get('/movies/:movieId', Controller.showMovie);
routes.use((req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
})
routes.get('/user/:userId', Controller.user);
routes.get('/movies/addwatchlist/:movieId/:userId', Controller.addWatchList);

module.exports = routes;