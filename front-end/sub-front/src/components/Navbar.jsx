import React, { useState } from "react";
import { useEffect } from "react";
import { AiFillCloseCircle, AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const [open, setOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const navigate = useNavigate();
  const handelLogout = () => {
    try {
      logOut();
      navigate("/");
      setOpen(!open)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(()=>{
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }
    if(windowSize>780){
      setOpen(false)
    }
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  },[windowSize])

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          Yakov-Cinema
        </h1>
      </Link>
      <div
        onClick={() => setOpen(!open)}
        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
      >
        {open ? (
          <AiFillCloseCircle color="white" />
        ) : (
          <AiOutlineMenu color="white" />
        )}
      </div>
      <ul
        className={`md:flex 
        bg-gray-00  md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? "top-16 opacity-90 bg-black" : "top-[-490px] md:opacity-90 opacity-0"
        }`}
      >
        <li
          onClick={() => setOpen(!open)}
          className="md:ml-8 text-xl md:my-0 my-7 flex items-center "
        >
          <Link to="/allMovies">
            <button className="text-white pr-4">All Movies</button>
          </Link>
        </li>
        {user?.email ? (
          <>
            <li
              onClick={() => setOpen(!open)}
              className="md:ml-8 text-xl md:my-0 my-7 flex items-center "
            >
              <Link to="/account">
                <button className="text-white pr-4">Account</button>
              </Link>
            </li>
            <li className="md:ml-8 text-xl md:my-0 my-7 flex items-center">
              <button
                onClick={handelLogout}
                className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
              >
                Logout{" "}
              </button>
            </li>
          </>
        ) : (
          <>
            <Link
              className="text-red-800 hover:text-gray-400 duration-500"
              to="/login"
            >
              <li
                onClick={() => setOpen(!open)}
                className="md:ml-8 text-xl md:my-0 my-7 flex items-center"
              >
                <button className="text-white pr-4">Sign In</button>
              </li>
            </Link>
            <Link
              className="text-red-800 hover:text-gray-400 duration-500"
              to="/signup"
            >
              <li
                onClick={() => setOpen(!open)}
                className="md:ml-8 text-xl md:my-0 my-7 flex items-center"
              >
                <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
                  Sign Up
                </button>
              </li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;


