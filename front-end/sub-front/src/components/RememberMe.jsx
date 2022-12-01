import React, { useEffect } from "react";


const RememberMe = ({
  setUserName,
setPassword,
  remember,
  setRemember,
  handleCheckBox,
}) => {
  const rememberInLocalStorage = () => {
    const check = JSON.parse(localStorage.getItem("remember-sub"))
      ? true
      : false;
    setRemember(check);
    if (check) {
      const {userName,password} =(JSON.parse(localStorage.getItem("remember-sub")));
     setUserName(userName)
     setPassword(password)
    }
  };
  useEffect(() => {
    rememberInLocalStorage();
  }, []);

  return (
    <div className=" flex items-center text-white font-bold ">
       <label className=" mr-2">Remember Me:</label>
      <input type="checkbox"  onChange={handleCheckBox} checked={remember} />
    </div>
  );
};

export default RememberMe;
