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
    static seeMovie(req, res) {
        let movieId = req.params.movieId;
        let movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=ee55e28c81ef2d96e16ed4fd23a15778&language=en-US`;
        axios.get(movieUrl)
            .then(movie => {
                let movieData = movie.data;
                res.send(movieData);
            }).catch(err => {
                res.send(err);
            });
    }
    static seeTvSeries(req, res) {
        let tvId = req.params.tvId;
        let tvUrl = `https://api.themoviedb.org/3/tv/${tvId}?api_key=ee55e28c81ef2d96e16ed4fd23a15778&language=en-US`;
        axios.get(tvUrl)
            .then(tv => {
                let tvData = tv.data;
                res.send(tvData);
            }).catch(err => {
                res.send(err);
            }); 
    }
    static tvHome(req, res) {
        let popularTvUrl = `https://api.themoviedb.org/3/tv/popular?api_key=ee55e28c81ef2d96e16ed4fd23a15778&language=en-US&page=1`;
        let onTheAirUrl = `https://api.themoviedb.org/3/tv/on_the_air?api_key=ee55e28c81ef2d96e16ed4fd23a15778&language=en-US&page=1`;
        let topRatedTvUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=ee55e28c81ef2d96e16ed4fd23a15778&language=en-US&page=1`;
        axios.all([
            axios.get(popularTvUrl),
            axios.get(onTheAirUrl),
            axios.get(topRatedTvUrl)
        ])
            .then(axios.spread((popularTv, onTheAir, topRated) => {
                let popularTvData = popularTv.data.results;
                let onTheAirData = onTheAir.data.results;
                let topRatedData = topRated.data.results;
                res.send(topRatedData);
            })).catch(err => {
                res.send(err);
            });

    }
}

module.exports = Controller