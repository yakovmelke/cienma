const moviesDal = require("../Dal/moviesDal");

const getAllMovies = async () => {
  try {
    const { data: movies } =
      await moviesDal.getAllMovies();
    return movies;
  } catch (error) {
    throw error;
  }
};

const getOneMovie = async (id) => {
  try {
    const { data: movie } = await moviesDal.getOneMovie(
      id
    );
    return movie;
  } catch (error) {
    throw error;
  }
};

const createMovie = async (obj) => {
  try {
    
    const result = await moviesDal.createMovie(obj);
    return result;
  } catch (error) {
    throw error;
  }
};

const updateMovie = async (id, obj) => {
  try {
    const result = await moviesDal.updateMovie(id, obj);
    return result;
  } catch (error) {
    throw error;
  }
};

const deleteMovie = async (id) => {
  try {
    const result = await moviesDal.deleteMovie(id);
    return result;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllMovies,
  getOneMovie,
  createMovie,
  updateMovie,
  deleteMovie,
};
