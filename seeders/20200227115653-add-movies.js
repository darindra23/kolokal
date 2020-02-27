'use strict';
const axios = require('axios').default;

module.exports = {
  up: (queryInterface, Sequelize) => {
    let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=ee55e28c81ef2d96e16ed4fd23a15778&language=en-US&page=1`;
    return axios.get(url)
      .then(data => {
        let movieData = data.data.results;
        let insert = [];
        for(let i = 0 ; i < movieData.length ; i ++) {
          let obj = {
            title: movieData[i].title,
            summary: movieData[i].overview,
            poster_path: movieData[i].poster_path,
            release_date: movieData[i].release_date,
            createdAt: new Date(),
            updatedAt: new Date()
          }
          insert.push(obj);
        }
        // console.log(insert);
        return queryInterface.bulkInsert('Movies', insert, {});
      }).catch(err => {
        console.log(err);
      });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Movies', null, {});
  }
};
