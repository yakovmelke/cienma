import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import { createMember } from '../../apiData/MembersApiData';
import AddAndEditSub from '../../utils/AddAndEditSub';

export default function AddSubscription() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
const [member,setMember]= useState({name:"",email:"",city:""})

const toastObj ={
  position:"bottom-right",
  autoClose:8000,
  pauseOnHover:true,
  draggable:true,
  theme:"dark"
}

const handleInput = (e)=>{
setMember({...member,[e.target.name]:e.target.value})
}

  function saveMember() {
    if(member.name !="" && member.email !="" &&member.city!=""){
      createMember(member,dispatch)
      navigate("/main_page/subscriptions");
    }else{
      toast.error("please complete all fields ",toastObj)
    }
  }

  return (
  <AddAndEditSub member={member}handleInput={handleInput} saveMember={saveMember} componentName={"Add Member"}/>
  );
}
