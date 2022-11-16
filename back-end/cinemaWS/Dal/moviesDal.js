const axios = require("axios");

const getAllMovies = () => axios.get("http://localhost:8000/movies");
const getOneMovie = (id) => axios.get("http://localhost:8000/movies/" + id);
const createMovie = (obj) => axios.post("http://localhost:8000/movies", obj);
const updateMovie = (id, obj) =>
  axios.put("http://localhost:8000/movies/" + id, obj);
const deleteMovie = (id) => axios.delete("http://localhost:8000/movies/" + id);

module.exports = {
  getAllMovies,
  getOneMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
