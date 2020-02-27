const routes = require("express").Router();
const Controller = require("../controllers");

routes.get("/", Controller.home);
routes.get("/register", Controller.signup);
routes.get("/movies/:movieId", Controller.seeMovie);
routes.get('/tv', Controller.tvHome);
routes.get('/tv/:tvId', Controller.seeTvSeries);

module.exports = routes;
