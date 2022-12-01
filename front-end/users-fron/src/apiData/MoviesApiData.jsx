import axios from "axios";

export const getAllMovies = async (dispatch) => {
  const { data: movies } = await axios.get(`http://localhost:8001/movies`);
  const finalMovies = movies.map((element) => {
    const str = element["premiered"].slice(0, 10);
    return { ...element, premiered: str };
  });
  const action = { type: "ADD ALL MOVIES", payload: finalMovies };
  dispatch(action);
};
export const createMovies = async (obj, dispatch) => {
  const { data: movies } = await axios.post(
    `http://localhost:8001/movies`,
    obj
  );
  console.log(movies);
  await getAllMovies(dispatch);
};
export const updateMovie = async (obj,dispatch) => {
  const { data: movies } = await axios.put(
    `http://localhost:8001/movies/${obj._id}`,
    obj
  );
  console.log(movies);
  await getAllMovies(dispatch);
};
export const deleteMovie = async (id,dispatch) => {
  const { data: movies } = await axios.delete(
    `http://localhost:8001/movies/${id}`
  );
  await getAllMovies(dispatch);
};
