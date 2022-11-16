import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateMember } from "../../apiData/MembersApiData";
import AddAndEditSub from "../../utils/AddAndEditSub";

export default function EditSubscription() {
  const navigate = useNavigate();
  const dispatch =useDispatch()
  const { id } = useParams();
  const allMembers = useSelector((data) => data.members);

  const [member, setMember] = useState({ name: "", email: "", city: "" });
  const findMember = () => {
    const memberData = allMembers.find((mem) => mem._id === id);
    return memberData;
  };
  useEffect(() => {
    setMember(findMember());
  }, [id]);

  const handleInput = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };
  function saveMember() {
    if(member.name !="" && member.email !="" &&member.city!=""){
      updateMember(member,dispatch)
      navigate("/main_page/subscriptions");
    }else{
      alert("please complete all fields ")
    }
  }

  return (
    <AddAndEditSub member={member}handleInput={handleInput} saveMember={saveMember} componentName={"Edit Member"}/>
  );
}
