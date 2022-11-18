import React, { useEffect, useState } from "react";


const RememberMe = ({
  setUserNameAndPassword,
  remember,
  setRemember,
  handleCheckBox,
}) => {
  const rememberInLocalStorage = () => {
    const check = JSON.parse(localStorage.getItem("remember-me"))
      ? true
      : false;
    setRemember(check);
    if (check) {
      setUserNameAndPassword(JSON.parse(localStorage.getItem("remember-me")));
    }
  };
  useEffect(() => {
    rememberInLocalStorage();
  }, []);

  return (
    <div className=" flex items-center text-gray-800 font-bold ">
       <label className=" mr-2">Remember Me:</label>
      <input type="checkbox"  onChange={handleCheckBox} checked={remember} />
    </div>
  );
};

export default RememberMe;
