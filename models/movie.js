'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    summary: DataTypes.TEXT,
    poster_path: DataTypes.STRING,
    release_date: DataTypes.STRING
  }, {});
  Movie.associate = function(models) {
    // associations can be defined here
    Movie.belongsToMany(models.User, { through: models.Watchlist });
  };
  return Movie;
};