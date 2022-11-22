import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from './components/Row';
const Requests = () => {
 
const [genres,setGenres] =useState({
  action: [],
  adventure: [],
  comedy: [],
  drama: [],
  fantasy: [],
  horror: [],
  music: [],
  mystery: [],
  romance: [],
  supernatural: [],
  family: [],
  anime: [],
  history: [],
  medical: [],
  "science-fiction": [],
  crime: [],
  espionage: [],
  sports: [],
  thriller: [],
})
const data = async () => {
  const obj ={
    action: [],
    adventure: [],
    comedy: [],
    drama: [],
    fantasy: [],
    horror: [],
    music: [],
    mystery: [],
    romance: [],
    supernatural: [],
    family: [],
    anime: [],
    history: [],
    medical: [],
    "science-fiction": [],
    crime: [],
    espionage: [],
    sports: [],
    thriller: [],
  }
 const {data} = await axios.get("http://localhost:8001/movies")
 data.forEach((element) => {
  // console.log(element);
  element.genres.forEach((value) => {
    if (obj[value.toLowerCase()])
      obj[value.toLowerCase()].push(element);
  });

});
  setGenres(obj)
};

useEffect(()=>{
data()
},[])
return(
  <div>
    <Row rowID="1" title="Action" fetchURL={genres.action} />
      <Row rowID="2" title="Adventure" fetchURL={genres.adventure} />
      <Row rowID="3" title="Comedy" fetchURL={genres.comedy} />
      <Row rowID="4" title="Drama" fetchURL={genres.drama} />
      <Row rowID="5" title="Fantasy" fetchURL={genres.fantasy} />
      <Row rowID="6" title="Horror" fetchURL={genres.horror} />
      <Row rowID="7" title="Music" fetchURL={genres.music} />
      <Row rowID="8" title="Mystery" fetchURL={genres.mystery} />
      <Row rowID="9" title="Romance" fetchURL={genres.romance} />
      <Row rowID="10" title="Supernatural" fetchURL={genres.supernatural} />
      <Row rowID="11" title="Family" fetchURL={genres.family} />
      <Row rowID="12" title="Anime" fetchURL={genres.anime} />
      <Row rowID="13" title="History" fetchURL={genres.history} />
      <Row rowID="14" title="Science Fiction" fetchURL={genres["science-fiction"]} />
      <Row rowID="15" title="Crime" fetchURL={genres.crime} />
      <Row rowID="16" title="Espionage" fetchURL={genres.espionage} />
      <Row rowID="17" title="Sports" fetchURL={genres.sports} />
      <Row rowID="18" title="Thriller" fetchURL={genres.thriller} />
      <Row rowID="19" title="Medical" fetchURL={genres.medical} />
  </div>
)
 
}

export default Requests