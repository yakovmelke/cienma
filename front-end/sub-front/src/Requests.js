import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "./components/Row";
import { UserAuth } from "./context/AuthContext";

const Requests = () => {
  const {movies} = UserAuth() 
  
  const [genres, setGenres] = useState( {
    action: [],
    adventure: [],
    comedy: [],
    anime: [],
    fantasy: [],
  });

  const data = async () => {
    const obj = {
      action: [],
      adventure: [],
      comedy: [],
      anime: [],
      fantasy: [],
    };
    movies.forEach((element) => {
      element.genres.forEach((value) => {
        if (obj[value.toLowerCase()]) obj[value.toLowerCase()].push(element);
      });
    });
    setGenres(obj);
    return data
  };

  useEffect(() => {
    data();
  }, [movies.length]);
  return (
    <div>
      <Row rowID="1" title="Action" fetchURL={genres.action} />
      <Row rowID="2" title="Adventure" fetchURL={genres.adventure} />
      <Row rowID="3" title="Comedy" fetchURL={genres.comedy} />
      <Row rowID="4" title="Anime" fetchURL={genres.anime} />
      <Row rowID="5" title="Fantasy" fetchURL={genres.fantasy} />
    </div>
  );
};

export default Requests;
