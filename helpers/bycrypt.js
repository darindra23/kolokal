module.exports = {
    bycrpt: (password) => {
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        const { User } = require('../models/user');
        return bcrypt.hash(password, saltRounds)
    }
}