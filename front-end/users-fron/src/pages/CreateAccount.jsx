import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsersData, updateUserPassword } from "../apiData/UsersApiData";
import { ErrorMsg } from "../utils/ErrorMsg";

export default function CreateAccount() {
  const navigate = useNavigate();
  const usersInRedux = useSelector((user) => user);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [userNameAndPassword, setUserNameAndPassword] = useState({
    userName: "",
    password: "",
  });

  useEffect(() => {
    getUsersData(dispatch);
    setUsers(usersInRedux.users);
  }, [usersInRedux.users.length]);

  function handelInput(e) {
    setUserNameAndPassword({
      ...userNameAndPassword,
      [e.target.name]: e.target.value,
    });
  }

  function checkUser(e) {
    e.preventDefault();
    if (userNameAndPassword.userName !== "") {
      const userGoIn = users.find(
        (user) => user.userName === userNameAndPassword.userName
      );
      if (userGoIn == undefined || userGoIn.password !== "") {
        console.log(userGoIn);
        ErrorMsg("something go wrong please contact the manager ");
      } else if (userNameAndPassword.password.length < 7) {
        ErrorMsg("please enter password that is length equal or greater 8 ");
      } else {
        updateUserPassword({ ...userNameAndPassword, _id: userGoIn.id });
        navigate("/");
        window.location.reload();
      }
    } else {
      ErrorMsg("please enter your user name ");
    }
  }

  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center  bg-[url('https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2022/01/14172326/netflix.jpg')] bg-cover bg-center">
      <div className="  bg-opacity-80 d-flex w-[90%] sm:w-[50%] lg:w-[30%] h-[75%] bg-gray-300 rounded-lg border shadow-2xl shadow-black">
        <div className="px-2 h-[95%] flex flex-col justify-between  items-center w-full ">
          <h3 className="font-bold my-9 text-2xl">Create Account</h3>
          <form
            className="w-full flex flex-col justify-between  h-[70%]"
            onSubmit={checkUser}
          >
            <div className="text-lg flex flex-col text-gray-800 font-bold py-2">
              <label>User Name</label>
              <input
                className="rounded-lg text-center text-lg bg-gray-800 mt-2 p-2  focus:bg-gray-700 focus:outline-none text-white "
                type="text"
                name="userName"
                onChange={handelInput}
              />
            </div>
            <div className="text-lg flex flex-col text-gray-800 font-bold py-2">
              <label>Password</label>
              <input
                className="rounded-lg text-center text-white text-lg bg-gray-800 mt-2 p-2  focus:bg-gray-700 focus:outline-none"
                type="password"
                name="password"
                onChange={handelInput}
              />
            </div>
            <button
              className="opacity-100 border-solid  my-3
          rounded-md p-2 bg-red-500 hover:bg-green-400 duration-500 text-white font-bold text-xl shadow-md shadow-gray-400"
              onSubmit={checkUser}
            >
              Save Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
