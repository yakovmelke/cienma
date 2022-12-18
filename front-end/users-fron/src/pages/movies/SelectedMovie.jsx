import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import MovieComponent from "../../utils/MovieComponent";

const SelectedMovie = () => {
  const { id } = useParams();
  const userLogin = useSelector((user) => user.login);
  const [movieData, setMovieData] = useState({_id:0,name:"",genres:[],premiered:""});
  const getAllMoviesInReducer = useSelector((movie) => movie.movies);

  useEffect(() => {
    setMovieData(getAllMoviesInReducer.find((movie) => movie._id === id));
  }, [id]);
  return (
    <>
    {userLogin.permissions.viewSubscriptions ? (
      <div className="bg-black text-white flex flex-col items-center pt-6">
      <h1 className="text-6xl text-center font-bold">selected Movie</h1>
      <div className=" w-[95%] border-b-2 border-gray-300 mb-2 text-lg flex flex-col justify-center items-center py-4">
        <div className="h-16 flex justify-center items-center">
          <Link to="/main_page/movies">
            <button
              className="mx-2 border-2 bg-green-600 p-2 rounded-lg hover:bg-green-400 duration-500 hover:border-blue-400 hover:p-3"
            >
              All Movies
            </button>
          </Link>
          {userLogin.permissions.createMovies && (
            <Link to="/main_page/add_movie">
              <button className="mx-2 border-2 bg-green-600 p-2 rounded-lg hover:bg-green-400 duration-500 hover:border-blue-400 hover:p-3">
                Add Movie
              </button>
            </Link>
          )}
        </div>
       
      </div>
      <div className="flex flex-wrap justify-center mx-5 w-full">

      <MovieComponent movie={movieData}/>
      </div>
    </div>):<h1 className="text-center text-4xl font-bold text-red-800">You are not authorized</h1>}
  </>
  );
};

export default SelectedMovie;
