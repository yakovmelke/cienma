import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { UserAuth } from "../context/AuthContext";

const Main = () => {
  const { movies } = UserAuth();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setMovie(movies[Math.floor(Math.random() * movies.length)]);
    }, 3500);
    return () => clearInterval(interval);
  }, [movies.length]);

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full flex justify-center items-center">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black "></div>
        {movie.name != undefined && (
          <img
            className="w-full md:w-[60%] lg:w-[30%] h-full  object-center"
            src={movie?.image}
            alt={movie?.name}
          />
        )}
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold ">{movie?.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
