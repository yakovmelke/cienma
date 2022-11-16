import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateMovie } from "../../apiData/MoviesApiData";
import {toast} from 'react-toastify'
import AddAndEditMovie from "../../utils/AddAndEditMovie";

export default function EditMovie() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const moviesFromRedux = useSelector((movie) => movie.movies);
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
  useEffect(() => {
    const currentMovie = moviesFromRedux.find((movie) => movie._id === id);
    setMovie({ ...currentMovie, genres: currentMovie?.genres.length });
    setGenre(currentMovie?.genres);
  }, [id]);
  const [genre, setGenre] = useState([]);
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
      updateMovie({ ...movie, genres: arr }, dispatch);
      navigate("/main_page/movies");
    } else {
      toast.error("please complete all fields",toastObj);
    }
  }
  return (
    <AddAndEditMovie movie={movie} componentName={"Edit Movie"} handleGenres={handleGenres}handleInput={handleInput} saveMovie={saveMovie} genre={genre}/>
  );
}
