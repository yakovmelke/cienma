import React from "react";
import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import axios from "axios";
import { useEffect } from "react";
import { ErrorMsg } from "./ErrorMsg";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      subToMovie();
    } else {
      ErrorMsg("Please log in to save a movie");
    }
  };

  const subToMovie = async () => {
    const date = new Date();

    const today = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
    const { data: subscriptions } = await axios.get(
      `http://localhost:8001/subscriptions`
    );
    let sub = subscriptions.find((elem) => elem.memberId === user._id);
    if (sub) {
      if (like == false) {
        sub.movies.push({ movieId: item._id, date: today });
         await axios.put(
          `http://localhost:8001/subscriptions/${sub._id}`,
          sub
        );
      } else {
        const filterMovies = sub.movies.filter(
          (movie) => movie.movieId != item._id
        );

        const { data: result } = await axios.put(
          `http://localhost:8001/subscriptions/${sub._id}`,
          { ...sub, movies: filterMovies }
        );
      }
    } else {
      sub = {};
      sub.memberId = user._id;
      sub.movies = [{ movieId: item._id, date: today }];
      await axios.post(`http://localhost:8001/subscriptions`, sub);
    }
  };

  const checkMovie = async () => {
    const { data: subscriptions } = await axios.get(
      `http://localhost:8001/subscriptions`
    );
    subscriptions.forEach((sub) => {
      if (sub.memberId === user._id) {
        sub.movies.forEach((movie) => {
          if (movie.movieId === item._id) {
            setLike(true);
          }
        });
      }
    });
  };
  useEffect(() => {
    if (user?._id) {
      checkMovie();
    }
  }, [like]);

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 ">
      <img className="w-full h-auto block" src={item?.image} alt={item?.name} />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item.name}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-red-700" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-red-700" />
          )}{" "}
        </p>
      </div>
    </div>
  );
};

export default Movie;
