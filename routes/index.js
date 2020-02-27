const routes = require("express").Router();
const Controller = require("../controllers");

routes.get("/", Controller.home);
// routes.get("/register", Controller.signup);
routes.get("/login", Controller.login);
routes.get("/movieslist", Controller.movieList);
routes.get("/movies/:movieId", Controller.showMovie);

module.exports = routes;

