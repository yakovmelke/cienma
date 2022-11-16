import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteMember } from "../apiData/MembersApiData";
import { createSubscription, updateSubscription } from "../apiData/SubApiData";
import {toast} from 'react-toastify'

const SubComponent = ({ member }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sub, setSub] = useState(false);
  const getAllMoviesInRedux = useSelector((sub) => sub.movies);
  const userLogin = useSelector((sub) => sub.login);
  const getAllSubInRedux = useSelector((sub) => sub.subscriptions);
  const findMemberMovies = (id) => {
    const getMemberSub = getAllSubInRedux.find((sub) => sub.memberId === id);
    if (getMemberSub) {
      return getMemberSub;
    } else {
      return false;
    }
  };
  const toastObj ={
    position:"bottom-right",
    autoClose:8000,
    pauseOnHover:true,
    draggable:true,
    theme:"dark"
  }
  const handleSelect = (e) => {
    setSubToNewMovie({ ...subToNewMovie, [e.target.name]: e.target.value });
  };

  const [subToNewMovie, setSubToNewMovie] = useState({ movieId: "", date: "" });
  const saveSubToNewMovie = (member) => {
    if (subToNewMovie.movieId === "" || subToNewMovie.date === "") {
      toast.error("Please select movie and date",toastObj);
    } else {
      const memberSubscribe = findMemberMovies(member._id);
      if (memberSubscribe) {
        updateSubscription(memberSubscribe, subToNewMovie, dispatch);
      } else {
        const obj = {};
        obj.memberId = member._id;
        obj.movies = [
          {
            ...subToNewMovie,
          },
        ];
        createSubscription(obj, dispatch);
      }
      setSub(!sub);
    }
  };

  return (
    <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] p-3 border border-stone-300 rounded-lg bg-slate-200 text-black bg-opacity-60  shadow-lg shadow-white mb-6 text-lg">
      {userLogin.permissions.viewSubscriptions ? (
        <div key={member?._id}>
          <h4>{member?.name}</h4>
          <p>Email : {member.email}</p>
          <p>City : {member.city}</p>
          <div className="h-16 flex justify-center items-center">
          {userLogin.permissions.updateSubscriptions && (
              <button
                className="mx-2 border-2 border-black bg-green-600 p-2 rounded-lg hover:bg-green-400 duration-500 hover:border-blue-400 hover:p-3"
                onClick={() =>
                  navigate("/main_page/edit_member/" + member?._id)
                }
              >
                Edit
              </button>
          )}
          {userLogin.permissions.deleteSubscriptions && (
            <button
            className="mx-2 border-2 border-black bg-red-600 p-2 rounded-lg hover:bg-red-400 duration-500 hover:border-blue-400 hover:p-3"
            onClick={() => deleteMember(member._id, dispatch)}
            >
              Delete
            </button>
          )}
          </div>
          <ul className="flex flex-wrap justify-center items-center">
            <h5>Movies Watched</h5>
            <button
              className="text-xs font-bold mx-2 border-2 border-black bg-green-600 p-2 rounded-lg hover:bg-green-400 duration-500 hover:border-blue-400 "
              onClick={() => setSub(!sub)}
            >
              subscribe to new movie
            </button>
            {sub && (
              <p>
                <select
                  className="text-white w-full bg-gray-800 pl-2 grow border rounded-md focus:bg-blue-500 "
                  onClick={handleSelect}
                  name="movieId"
                >
                  {getAllMoviesInRedux.map((movie) => {
                    return (
                      <option key={movie?._id} value={movie?._id}>
                        {movie?.name}
                      </option>
                    );
                  })}
                </select>
                <input
                  className="bg-gray-800 pl-2 grow border rounded-md focus:bg-blue-500 text-white"
                  onChange={handleSelect}
                  type="date"
                  name="date"
                />
                <button
                  className="text-xs font-bold text-red-800 ml-1 border-2 border-black bg-green-500 p-1 rounded-lg hover:bg-green-400 duration-500 hover:border-red-500"
                  onClick={() => saveSubToNewMovie(member)}
                >
                  subscribe
                </button>
              </p>
            )}
            {findMemberMovies(member._id) &&
              findMemberMovies(member._id).movies.map((movie) => {
                const obj = getAllMoviesInRedux.find(
                  (value) => value._id == movie.movieId
                );
                return (
                  <li key={obj._id}>
                    <h3>
                      <Link
                        className="underline underline-offset-1 text-blue-800 hover:text-blue-500 duration-300"
                        to={"/main_page/selected_movie/" + obj._id}
                      >
                        {" "}
                        {obj?.name}{" "}
                      </Link>{" "}
                      , {movie?.date}
                    </h3>
                  </li>
                );
              })}
          </ul>
        </div>
      ):<h1 className=" text-4xl font-bold text-red-800">You are not authorized</h1>}
    </div>
  );
};

export default SubComponent;
