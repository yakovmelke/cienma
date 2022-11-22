import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  const findMovies = async () => {
    const { data: subscriptions } = await axios.get(
      `http://localhost:8001/subscriptions`
    );
    const { data: moviesData } = await axios.get(
      `http://localhost:8001/movies`
    );
    const findMember = subscriptions.find(
      (member) => member.memberId === user._id
    );
    if (findMember) {
      const finalMoviesArray = findMember.movies.map((movie) => {
        return moviesData.find((ele) => ele._id === movie.movieId);
      });
      setMovies(finalMoviesArray);
    }
  };
  useEffect(() => {
    findMovies();
  }, []);
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const deleteMovie = async (id) => {
    try {
      
      const { data: subscriptions } = await axios.get(
        `http://localhost:8001/subscriptions`
      );
      const findMember = subscriptions.find(
        (member) => member.memberId === user._id
      );
     const finalMoviesArray = findMember.movies.filter((item) => item.movieId !== id);
      const result = await axios.put(
        `http://localhost:8001/subscriptions/${findMember._id}`,
        {...findMember,movies:finalMoviesArray}
      );

      console.log(finalMoviesArray);
      console.log(finalMoviesArray);
     await findMovies();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{"My Movies"}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white rounded-full absolute opacity-25 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block "
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies.map((item, id) => (
            <div
              key={id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 "
            >
              <img
                className="w-full h-auto block"
                src={item?.image}
                alt={item?.name}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {item?.name}
                </p>
                <p
                  onClick={() => deleteMovie(item._id)}
                  className="absolute text-gray-300 top-4 right-4"
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white rounded-full absolute opacity-25 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0  "
          size={40}
        />
      </div>
    </>
  );
};

export default SavedShows;
