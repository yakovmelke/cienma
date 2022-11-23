import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RememberMe from "../components/RememberMe";
import { UserAuth } from "../context/AuthContext";


const Login = () => {
  const [remember, setRemember] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState(""); 
  const[error,setError]= useState("")
  const {  logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const result = await logIn(userName, password);
    if (remember) {
      localStorage.setItem(
        "remember-sub",
        JSON.stringify({userName,password})
      );
    }
      navigate("/");
      setError('')
    } catch (error) {
      console.log(error);
      setError(error)
    }
  };

  const handleCheckBox = () => {
    if (
      userName !== "" &&
      password !== ""
    ) {
      if (remember === true) {
        localStorage.removeItem("remember-sub");
      }
      setRemember(!remember);
    } else {
      localStorage.removeItem("remember-sub");
      alert("Please complete all fields first");
      setRemember(false);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-screen object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/be788ce5-47b0-4942-abb1-2108bcdfb71d/IL-he-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix picture"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[450px] mx-auto bg-black/75 text-white ">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              {error && <p className="p-3 bg-red-400 my-2">{error}</p>}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="text"
                  placeholder="Email"
                  defaultValue={userName}
                  
                  />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  defaultValue={password}
                  />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign In
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  
                    <RememberMe
                      handleCheckBox={handleCheckBox}
                      setRemember={setRemember}
                      remember={remember}
                      setUserName={setUserName}
                      setPassword={setPassword}
                    />
                  
                
                </div>
                <p className="py-8">
                  <span className="text-gray-600">New to Yakov-Cinema: </span>
                  <Link to="/signup"> Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
