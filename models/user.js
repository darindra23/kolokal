"use strict";
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;
  const { bycrpt } = require("../helpers/bycrypt");

  class User extends Model {
    getFullName() {
      return this.first_name + " " + this.last_name;
    }
  }
  User.init(
    {
      first_name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: `First name cannot be empty`
          }
        }
      },
      last_name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: `Last name cannot be empty`
          }
        }
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notEmpty: {
            args: true,
            msg: `Username cannot be empty`
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          notEmpty: {
            args: true,
            msg: `E-Mail cannot be empty`
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [6, 20],
            msg: `Password must be between 6 and 20 character`
          }
        }
      }
    },
    {
      sequelize,
      hooks: {
        beforeCreate: (instance, options) => {
          let password = instance.password;
          return bycrpt(password).then(data => {
            instance.password = data;
          });
        }
      }
    }
  );

  // const User = sequelize.define('User', {
  //   name: DataTypes.STRING,
  //   username: {
  //     type: DataTypes.STRING,
  //     validate: {
  //       notEmpty: {
  //         args: true,
  //         msg: `Username cannot be empty`
  //       }
  //     }
  //   },
  //   email: DataTypes.STRING,
  //   password: DataTypes.STRING
  // }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Movie, { through: models.Watchlist });
  };
  return User;
};
