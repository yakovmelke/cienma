import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";


const Main = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8001/movies").then((response) => {
      setMovies(response.data);
      setMovie(response.data[0]);
    });
  }, []);

 

  useEffect(() => {
    const interval = setInterval(() => {
      setMovie(movies[Math.floor(Math.random() * movies.length)]);
    }, 3500);
    return () => clearInterval(interval);
  }, [movies.length]);
  
  return (
    <div className="w-screen h-[550px] text-white">
      <div className="w-screen h-full flex justify-center items-center">
        <div className="absolute w-screen h-[550px] bg-gradient-to-r from-black "></div>
        <img
          className="w-full md:w-[60%] h-full  object-center"
          src={movie?.image}
          alt={movie?.name}
        />
        <div className="absolute w-screen top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold ">{movie?.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
