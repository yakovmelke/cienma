import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../apiData/UsersApiData";
import AddAndEditUser from "../../utils/AddAndEditUser";
import { ErrorMsg } from "../../utils/ErrorMsg";

export default function AddUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const AllDataFromRedux = useSelector((element) => element);
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    userName: "",
    sessionTimeOut: "",
    admin: false,
  });
  const [permissions, setPermissions] = useState({
    viewSubscriptions: false,
    createSubscriptions: false,
    updateSubscriptions: false,
    deleteSubscriptions: false,
    viewMovies: false,
    createMovies: false,
    updateMovies: false,
    deleteMovies: false,
  });

  const userChanges = (e) => {
    if (e.target.name != "admin") {
      setUser({ ...user, [e.target.name]: e.target.value });
    } else {
      setUser({ ...user, [e.target.name]: e.target.checked });
    }
  };

  const permissionsChanges = (e) => {
    let finalPer = { ...permissions, [e.target.name]: e.target.checked };
    if (
      finalPer.createSubscriptions === true ||
      finalPer.updateSubscriptions === true ||
      finalPer.deleteSubscriptions === true
    ) {
      finalPer = { ...finalPer, viewSubscriptions: true };
    }

    if (
      finalPer.createMovies === true ||
      finalPer.deleteMovies === true ||
      finalPer.updateMovies === true
    ) {
      finalPer = { ...finalPer, viewMovies: true };
    }
    setPermissions(finalPer);
  };
  function saveEdit() {
    const checkUserName = AllDataFromRedux.users.find(
      (name) => name.userName === user.userName
    );
    const checkUserId = AllDataFromRedux.users.find(
      (name) => name.id === user.id
    );
    if (
      !checkUserName &&
      !checkUserId & (user.userName.length > 7) &&
      user.id.length > 7
    ) {
      const finalObj = { ...user, permissions };
      createUser(finalObj, dispatch);

      navigate("/main_page/users");
    } else {
      if (checkUserName) {
        ErrorMsg("Please enter a different user name");
      }
      if (checkUserId) {
        ErrorMsg("Please enter a different employ number");
      }
      if (user.userName.length < 8) {
        ErrorMsg("User name must be 8 or more digits");
      }
      if (user.id.length < 8) {
        ErrorMsg("Employ number must be 8 or more digits");
      }
    }
  }

  return (
    <AddAndEditUser
      permissionsChanges={permissionsChanges}
      user={user}
      permissions={permissions}
      updateEdit={saveEdit}
      userChanges={userChanges}
      componentName={"Add User"}
    />
  );
}
