const { User, Movie, ReviewList } = require("../models/index");

// API KEY =  ee55e28c81ef2d96e16ed4fd23a15778
class Controller {
  static home(req, res) {
    let condition = {
      limit: 5,
      order: [["id", "ASC"]]
    };
    Movie.findAll(condition)
      .then(data => {
        console.log(data[0]);
        res.render("home", { data });
      })
      .catch(err => {
        res.send(err);
      });
  }
  static movieList(req, res) {
    let condition = {
      order: [["id", "ASC"]]
    };
    Movie.findAll(condition)
      .then(data => {
        res.render("list", { data });
      })
      .catch(err => {
        res.send(err);
      });
  }
  static showMovie(req, res) {
    let condition = {
      where: {
        id: Number(req.params.movieId)
      }
    };
    Movie.findOne(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.send(err);
      });
  }
  static login(req, res) {
    res.render("login");
  }
  static register(req, res) {
    res.render("register");
  }
}

module.exports = Controller;
