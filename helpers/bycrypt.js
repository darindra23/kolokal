module.exports = {
    bycrpt: (password) => {
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        const { User } = require('../models/user');
        bcrypt.hash(myPlaintextPassword, saltRounds)
            .then(hash => {
                return hash;
            });
    }
}