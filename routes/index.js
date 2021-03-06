const routes = require("express").Router();
const Controller = require("../controllers");

const checkLogin = (req, res, next) => {
  if (!req.session.user) {
    res.redirect("/login");
  } else {
    next();
  }
};

routes.get("/", Controller.home);
routes.get("/register", Controller.register);
routes.post("/register", Controller.registerData);
routes.get("/login", Controller.login);
routes.post("/login", Controller.loginData);
routes.get("/movieslist", Controller.movieList);
routes.get("/user", checkLogin, Controller.user);
routes.get("/add/watchlist/:movieId", checkLogin, Controller.addWatchList);
routes.get("/logout", checkLogin, Controller.logout);
routes.get("/delete/:movieId", checkLogin, Controller.delete);

module.exports = routes;
