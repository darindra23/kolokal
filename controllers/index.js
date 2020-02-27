class Controller {
  static home(req, res) {
    res.render("home");
  }
  static signup(req, res) {
    res.render("register");
  }
  static login(req, res) {
    res.render("login");
  }
}

module.exports = Controller;
