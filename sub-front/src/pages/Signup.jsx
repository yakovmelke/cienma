import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [user, setUser] = useState({name:"",userName:"",password:"",city:"",email:""});
 
  const {  signUp } = UserAuth();
  const navigate = useNavigate();

  const handleInputs = (e)=>{
    e.preventDefault();
    setUser({...user,[e.target.name]:e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
   if(user.name !==""&&
    user.userName !==""&&
    user.password !==""&&
    user.email !==""&&
    user.city !==""){
      try {
        await signUp(user);
        navigate("/login");
      } catch (error) {
        alert(error);
      }
    }else{
      alert("please complete all fields")
    }
  };
  return (
    <>
      <div className="w-full h-full">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/79fe83d4-7ef6-4181-9439-46db72599559/be788ce5-47b0-4942-abb1-2108bcdfb71d/IL-he-20221017-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix picture"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-full"></div>
        <div className="fixed w-full px-4 py-2 z-50">
          <div className="max-w-[450px]  mx-auto bg-black/75 text-white ">
            <div className="max-w-[320px] mx-auto py-4">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={handleInputs}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="text"
                  placeholder="User Name"
                  name="userName"                />
                <input
                  onChange={handleInputs}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="text"
                  placeholder="Full Name"
                  name="name"                />
                <input
                  onChange={handleInputs}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="text"
                  placeholder="City"
                  name="city"                />
                <input
                  onChange={handleInputs}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  name="email"                />
                <input
                  onChange={handleInputs}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  name="password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">
                    Already subscribed to Netflix
                  </span>
                  <Link to="/login"> Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
