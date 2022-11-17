import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../apiData/UsersApiData";
import AddAndEditUser from "../../utils/AddAndEditUser";
import {toast} from 'react-toastify'

export default function EditUsers() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch =useDispatch()
  const getUserFromRedux = useSelector((user) =>
    user.users.find((ele) => ele.id == id)
  );
  const toastObj ={
    position:"bottom-right",
    autoClose:8000,
    pauseOnHover:true,
    draggable:true,
    theme:"dark"
  }

  const [user, setUser] = useState({
    id: 1,
    firstName: "",
    lastName: "",
    userName: "",
    sessionTimeOut: "",
    createdDate: "",
    admin:false,
  });
  
  const [permissions, setPermissions] = useState([]);
  useEffect(() => {
    if (getUserFromRedux) {
      setUser(getUserFromRedux);
      setPermissions(getUserFromRedux?.permissions);
    }
  }, [getUserFromRedux]);
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
      
      finalPer.createSubscriptions  === true ||
      finalPer.updateSubscriptions  === true ||
      finalPer.deleteSubscriptions  === true
    ) {
      finalPer = { ...finalPer, viewSubscriptions : true };
      
    }

    if (
     
      finalPer.createMovies  === true ||
      finalPer.deleteMovies  === true ||
      finalPer.updateMovies  === true
    ) {
      finalPer = { ...finalPer, viewMovies : true };
    }
    setPermissions(finalPer);
  };

  function updateEdit() {
   if( user.firstName === ""||
   user.lastName=== ""||
   user.userName=== ""||
   user.sessionTimeOut=== ""){
    toast.error("Please complete all fields",toastObj)
   }else{

     const finalObj = {...user,permissions:permissions}
     updateUser(finalObj,dispatch)
     navigate("/main_page/users");
    }
  }
  return (
    <AddAndEditUser permissionsChanges={permissionsChanges} user={user} permissions={permissions} updateEdit={updateEdit} userChanges={userChanges} componentName={'Edit User'}/>
  );
}
