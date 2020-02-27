"use strict";
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class User extends Model {
    getFullName() {
      return this.first_name + ' ' + this.last_name;
    }
  }
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: `Username cannot be empty`
        }
      }
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, { sequelize })


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
