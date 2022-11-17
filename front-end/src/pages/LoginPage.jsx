import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersData } from "../apiData/UsersApiData";
import {toast} from 'react-toastify'


export default function LoginPage() {
  const navigate = useNavigate();
  const usersInRedux = useSelector((user) => user);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [userNameAndPassword, setUserNameAndPassword] = useState({
    userName: "",
    password: "",
  });
const toastObj ={
  position:"bottom-right",
  autoClose:8000,
  pauseOnHover:true,
  draggable:true,
  theme:"dark"
}

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
    const userGoIn = users.find(
      (user) => user.userName === userNameAndPassword.userName
    );
    if (userGoIn == undefined) {
      toast.error("user name or password was wrong",toastObj);
    } else if (
      userGoIn.password !== userNameAndPassword.password ||
      userNameAndPassword.password.length < 8
    ) {
      toast.error("user name or password was wrong",toastObj);
    } else {
      console.log(userGoIn);
      const action = { type: "LOGIN", payload: userGoIn };
      dispatch(action);
      navigate("/main_page");
    }
  }

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center  bg-[url('./assets/Cinema-City-Theater-scaled.jpg')] bg-cover bg-center">
      <div className="  bg-opacity-70 d-flex w-[90%] sm:w-[50%] lg:w-[30%] h-[75%] bg-white rounded-lg border shadow-2xl shadow-black">
        <div className="px-2 h-[90%] flex flex-col justify-around  items-center w-full ">
          <h3 className="font-bold text-2xl">Log in Page</h3>
          <form
            className="border-b-4 w-full flex flex-col justify-between border-gray-400 rounded-sm h-[70%]"
            onSubmit={checkUser}
          >
            <div className=" text-lg flex flex-col text-gray-800 font-bold py-2">
              <label>User Name</label>
              <input
                className="rounded-lg text-center text-lg bg-gray-700 mt-2 p-2  focus:bg-gray-800 focus:outline-none text-white "
                type="text"
                name="userName"
                onChange={handelInput}
              />
            </div>
            <div className="text-lg flex flex-col text-gray-800 font-bold py-2">
              <label>Password</label>
              <input
                className="rounded-lg text-center text-white text-lg bg-gray-700 mt-2 p-2  focus:bg-gray-800 focus:outline-none"
                type="password"
                name="password"
                onChange={handelInput}
              />
            </div>
            <button
              className="opacity-100 border-solid  my-3
            rounded-md p-2 bg-green-500 text-white font-bold text-xl shadow-md shadow-gray-400"
              onSubmit={checkUser}
            >
              Login
            </button>
          </form>
        </div>
        <p className="font-semibold text-lg text-center ">
          New User? :{" "}
          <span
            className="text-red-600 cursor-pointer"
            onClick={() => navigate("create_account")}
          >
            Create Account
          </span>{" "}
        </p>
      </div>
      
    </div>
  );
}
