const axios = require("axios")

const getMovies =()=> axios.get("https://api.tvmaze.com/shows");


module.exports = {getMovies}