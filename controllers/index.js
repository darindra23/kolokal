const { User, Movie, Watchlist } = require("../models/index");
const { compare } = require("../helpers/bycrypt");

class Controller {
  static home(req, res) {
    Movie.findAll({
      limit: 5,
      order: [["id", "ASC"]]
    })
      .then(data => {
        res.render("home", { data, user: req.session.user });
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
        res.render("list", { data, user: req.session.user });
      })
      .catch(err => {
        res.send(err);
      });
  }
  static user(req, res) {
    let id = req.session.user.id;
    User.findOne({ where: id, include: Movie })
      .then(data => {
        res.render("user", { data, user: req.session.user });
      })
      .catch(err => {
        res.send(err);
      });
  }
  static addWatchList(req, res) {
    if (!req.session.user) {
      res.redirect("/login");
    } else {
      let option = {
        UserId: req.session.user.id,
        MovieId: req.params.movieId
      };
      Watchlist.create(option)
        .then(() => {
          res.redirect("/user");
        })
        .catch(err => {
          res.send(err);
        });
    }
  }
  static login(req, res) {
    if (!req.session.user) {
      res.render("login", { user: req.session.user, errors: false });
    } else {
      res.redirect("/");
    }
  }
  static loginData(req, res) {
    let option = {
      where: {
        email: req.body.email
      }
    };
    let userData = null;
    User.findOne(option)
      .then(data => {
        if (!data) {
          res.render("login", {
            user: undefined,
            errors: [{ message: "Invalid Username or Password" }]
          });
        } else {
          userData = data;
          let password = data.password;
          return compare(req.body.password, password);
        }
      })
      .then(pass => {
        if (pass) {
          req.session.user = {
            id: userData.id,
            name: userData.getFullName()
          };
          res.redirect("/user");
        } else {
          res.send("Salah");
        }
      })
      .catch(err => {
        res.send(err);
      });
  }
  static register(req, res) {
    res.render("register", { user: req.session.user, errors: false });
  }
  static registerData(req, res) {
    let obj = {
      first_name: req.body.firstname,
      last_name: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    };
    User.create(obj)
      .then(() => {
        res.redirect("/login");
      })
      .catch(err => {
        res.render("register", { user: req.session.user, errors: err.errors });
      });
  }
  static logout(req, res) {
    req.session.destroy(() => {
      res.redirect("/");
    });
  }
  static delete(req, res) {
    let condition = {
      where: {
        MovieId: req.params.movieId,
        UserId: req.session.user.id
      }
    };
    Watchlist.destroy(condition)
      .then(() => {
        res.redirect("/user");
      })
      .catch(err => {
        res.send(err);
      });
  }
}

module.exports = Controller;
