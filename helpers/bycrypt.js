module.exports = {
    bycrpt: (password) => {
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        const { User } = require('../models/user');
        bcrypt.hash(password, saltRounds, function(err, hash) {
            let obj = {
                password: hash
            }
            User.create()
        });
    }
}