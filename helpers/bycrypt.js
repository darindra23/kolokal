module.exports = {
  bycrpt: password => {
    const bcrypt = require("bcrypt");
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
  },
  compare: (password, hash) => {
    const bcrypt = require("bcrypt");
    return bcrypt.compare(password, hash);
  }
};
