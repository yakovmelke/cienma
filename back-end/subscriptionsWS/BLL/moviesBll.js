const moviesDal = require("../DAL/moviesDal");
const moviesModel = require("../model/moviesModel");

const getALLMovies = async () => {
  try {
    const movies = await moviesModel.find();
    return movies;
  } catch (error) {
    throw error;
  }
};

const getOneMovie = async (id) => {
  try {
    const movie = await moviesModel.findById(id);
    return movie;
  } catch (error) {
    throw error;
  }
};

const createMovie = async (obj) => {
  try {
    const newMovie = new moviesModel(obj);
    await newMovie.save();
    return "Created";
  } catch (error) {
    throw error;
  }
};

const updateMovie = async (id, obj) => {
  try {
    await moviesModel.findByIdAndUpdate(id, obj);
    return "Updated";
  } catch (error) {
    throw error;
  }
};

const deleteMovie = async (id) => {
  try {
    await moviesModel.findByIdAndDelete(id);
    return "Deleted";
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getALLMovies,
  getOneMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
