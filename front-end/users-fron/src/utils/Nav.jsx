import React from "react";
import { Link } from "react-router-dom";
import { RiMovie2Line } from "react-icons/ri";
import { BiCameraMovie, BiLogOut } from "react-icons/bi";
import { MdUnsubscribe } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

export default function Nav({ admin = true }) {
  const [open, setOpen] = useState(false);

  const logOut = () => {
    window.location.reload();
  };
  return (
    <div className="mb-20 ">
      <div className="shadow-md w-full fixed top-0 left-0 ">
        <div className="md:flex opacity-80  bg-gray-700 items-center justify-between py-4 md:px-10 px-7">
          <div className="font-bold text-2xl flex items-center font-[Poppins] text-white">
            <span className="text-3xl text-indigo-600 mr-1 pt-2">
              <RiMovie2Line />
            </span>
            <p>Yakov's Movies </p>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {open ? <AiFillCloseCircle /> : <AiOutlineMenu />}
          </div>
          <ul
            className={`md:flex 
            bg-gray-00  md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open
                ? "top-16 opacity-90"
                : "top-[-490px] md:opacity-90 opacity-0"
            }`}
          >
            <Link
              className="text-red-800 hover:text-gray-400 duration-500"
              to={"/main_page/movies"}
            >
              <li
                onClick={() => setOpen(!open)}
                className="md:ml-8 text-xl md:my-0 my-7 flex items-center "
              >
                Movies
                <BiCameraMovie className="ml-2" />
              </li>
            </Link>
            <Link
              className="text-red-800 hover:text-gray-400 duration-500"
              to={"/main_page/subscriptions"}
            >
              <li
                onClick={() => setOpen(!open)}
                className="md:ml-8 text-xl md:my-0 my-7 flex items-center "
              >
                Subscriptions
                <MdUnsubscribe className="ml-2" />
              </li>
            </Link>
            {admin && (
              <Link
                className="text-red-800 hover:text-gray-400 duration-500"
                to={"/main_page/users"}
              >
                <li
                  onClick={() => setOpen(!open)}
                  className="md:ml-8 text-xl md:my-0 my-7 flex items-center"
                >
                  Users Management
                  <FiUsers className="ml-2" />
                </li>
              </Link>
            )}
            <Link
              className="text-red-800 hover:text-gray-400 duration-500"
              to={"/"}
              onClick={logOut}
            >
              <li className="md:ml-8 text-xl md:my-0 my-7 flex items-center">
                Log Out
                <BiLogOut className="ml-2" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
