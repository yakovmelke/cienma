import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Movie from "../components/Movie";
import { UserAuth } from "../context/AuthContext";

const AllMovies = () => {
    const { movies } = UserAuth();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, [movies.length]);

  return (
    <>
      <div className="pt-16 flex flex-wrap justify-around ">
        {movies.map((item, id) => {
          return <Movie item={item} key={id} />;
        })}
        <Loading loading={loading} />
      </div>
    </>
  );
};

export default AllMovies;
