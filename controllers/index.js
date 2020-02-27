const axios = require('axios').default;

// API KEY =  ee55e28c81ef2d96e16ed4fd23a15778
class Controller{
    static home(req,res){
        let popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=ee55e28c81ef2d96e16ed4fd23a15778&language=en-US&page=1`;
        let nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=ee55e28c81ef2d96e16ed4fd23a15778&language=en-US&page=1`;
        let topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=ee55e28c81ef2d96e16ed4fd23a15778&language=en-US&page=1`;
        axios.all([
            axios.get(nowPlayingUrl),
            axios.get(popularMoviesUrl),
            axios.get(topRatedUrl)
          ])
          .then(axios.spread((popularMovies, nowPlaying, topRated) => {
            let popularMoviesData = popularMovies.data.results;
            let nowPlayingData = nowPlaying.data.results;
            let topRatedData = topRated.data.results;
            // res.render('home', { popularMoviesData, nowPlayingData, topRatedData });
            res.send(topRatedData);
            // res.send(popularMovies);
          }));

    }
    static signup(req,res){
        res.render('register')
    }
}

module.exports = Controller