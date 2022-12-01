import Nav from "../utils/Nav";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {  getUsersData } from "../apiData/UsersApiData";
import { getAllMovies } from "../apiData/MoviesApiData";
import { getAllSubscriptions } from "../apiData/SubApiData";
import { getAllMembers } from "../apiData/MembersApiData";

export default function MainPage() {
  const dispatch = useDispatch();
  const login = useSelector((data) => data.login);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const checkLogin = () => {
    if (login.id == undefined) {
      navigate("/");
    }else{
      setUser(login);
    }
  };
  useEffect(() => {
    checkLogin()
  }, [login]);
  useEffect(() => {
    getAllSubscriptions(dispatch);
    getAllMovies(dispatch)
    getUsersData(dispatch)
    getAllMembers(dispatch)
  }, []);

  return (
    <div>
      <Nav  admin={user.admin}/>
      <Outlet  />
    </div>
  );
}
