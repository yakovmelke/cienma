import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import MovieComponent from "../../utils/MovieComponent";

export default function Movies() {
  const [moviesData, setMovieData] = useState([]);
  const [input, setInput] = useState("");
  const userLogin = useSelector((user) => user.login);
  const [moviesDisplay, setMoviesDisplay] = useState([
    { _id: 1, name: "", year: "", genres: [], image: "" },
  ]);

  const getAllMoviesInReducer = useSelector((movie) => movie.movies);
  useEffect(() => {
    setMoviesDisplay(getAllMoviesInReducer);
    setMovieData(getAllMoviesInReducer);
  }, [getAllMoviesInReducer]);
  const moviesFilter = (movieName) => {
    setInput(movieName);
    const filterMovies = moviesData.filter((movie) => {
      return movie.name.toLowerCase().startsWith(movieName.toLowerCase());
    });
    setMoviesDisplay(filterMovies);
  };

  return (
    <div className="bg-black text-white flex flex-col items-center pt-6">
      <h1 className="text-6xl text-center font-bold">Movies</h1>
      <div className=" w-[95%] border-b-2 border-gray-300 mb-2 text-lg flex flex-col justify-center items-center py-4">
        <div className="h-16 flex justify-center items-center">
          <Link to="/main_page/movies">
            <button
              className="mx-2 border-2 bg-green-600 p-2 rounded-lg hover:bg-green-400 duration-500 hover:border-blue-400 hover:p-3"
              onClick={() => moviesFilter("")}
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
        <div className="flex p-2 ">
          <p className="mx-2">Find Movie : </p>
          <input
            className="bg-slate-500 rounded-md px-2"
            value={input}
            onChange={(e) => moviesFilter(e.target.value)}
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between mx-5">
        {moviesDisplay.map((movie, i) => {
          return <MovieComponent key={i} movie={movie} />;
        })}
      </div>
    </div>
  );
}
