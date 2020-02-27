const routes = require("express").Router();
const Controller = require("../controllers");

routes.get("/", Controller.home);
routes.get("/register", Controller.signup);

module.exports = routes;
