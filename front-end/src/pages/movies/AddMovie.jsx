import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createMovies } from "../../apiData/MoviesApiData";
import {toast} from 'react-toastify'
import AddAndEditMovie from "../../utils/AddAndEditMovie";
import { ErrorMsg } from "../../utils/ErrorMsg";

export default function AddMovie() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    name: "",
    image: "",
    genres: "",
    premiered: "",
  });
  const toastObj ={
    position:"bottom-right",
    autoClose:8000,
    pauseOnHover:true,
    draggable:true,
    theme:"dark"
  }
  const dispatch = useDispatch();
  const [genre, setGenre] = useState([]);
  function saveMovie() {
    if (
      movie.name != "" &&
      movie.image != "" &&
      movie.premiered != "" &&
      genre[0] != ""
    ) {
      let arr = [];
      for (let i = 0; i < genre.length; i++) {
        if (genre[i] !== "") {
          arr.push(genre[i]);
        }
      }
      createMovies({ ...movie, genres: arr }, dispatch);
      navigate("/main_page/movies");
    } else {
      ErrorMsg("please complete all fields ");
    }
  }

  const handleInput = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
    if ([e.target.name] == "genres") {
      let arr = [...genre];
      if (genre.length < e.target.value) {
        arr.push("");
      } else {
        arr.pop();
      }
      setGenre(arr);
    }
  };
  const handleGenres = (e, i) => {
    let genreData = [...genre];
    genreData.splice(i, 1, e.target.value);
    setGenre(genreData);
  };

  return (
    <AddAndEditMovie movie={movie} componentName={"Add Movie"} handleGenres={handleGenres}handleInput={handleInput} saveMovie={saveMovie} genre={genre}/>
  );
}
