import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Movie from "../components/Movie";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllMovies = async () => {
    const { data } = await axios.get("http://localhost:8001/movies");
    setMovies(data);
  };

  useEffect(() => {
    getAllMovies();
  }, [getAllMovies.length]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, [movies.length]);

  return (
    <>
      <div className="pt-16">
        {movies.map((item, id) => {
          return <Movie item={item} key={id} />;
        })}
        <Loading loading={loading} />
      </div>
    </>
  );
};

export default AllMovies;
