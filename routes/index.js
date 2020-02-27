const routes = require("express").Router();
const Controller = require("../controllers");

routes.get("/", Controller.home);
routes.get("/register", Controller.signup);
routes.get("/login", Controller.login);

module.exports = routes;
