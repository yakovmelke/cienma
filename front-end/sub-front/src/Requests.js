import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "./components/Row";

const Requests = () => {
  
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
    const { data } = await axios.get("http://localhost:8001/movies");
    data.forEach((element) => {
      element.genres.forEach((value) => {
        if (obj[value.toLowerCase()]) obj[value.toLowerCase()].push(element);
      });
    });
    setGenres(obj);
    return data
  };

  useEffect(() => {
    data();
  }, []);
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
