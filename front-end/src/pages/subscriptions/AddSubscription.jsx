import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createMember } from "../../apiData/MembersApiData";
import AddAndEditSub from "../../utils/AddAndEditSub";
import { ErrorMsg } from "../../utils/ErrorMsg";

export default function AddSubscription() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [member, setMember] = useState({ name: "", email: "", city: "" });

  const handleInput = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  function saveMember() {
    if (member.name != "" && member.email != "" && member.city != "") {
      createMember(member, dispatch);
      navigate("/main_page/subscriptions");
    } else {
      ErrorMsg("please complete all fields ");
    }
  }

  return (
    <AddAndEditSub
      member={member}
      handleInput={handleInput}
      saveMember={saveMember}
      componentName={"Add Member"}
    />
  );
}
