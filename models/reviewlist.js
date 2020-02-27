'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviewlist = sequelize.define('Reviewlist', {
    UserId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER
  }, {});
  Reviewlist.associate = function(models) {
    // associations can be defined here
  };
  return Reviewlist;
};