import React from "react";
import { useNavigate } from "react-router-dom";

const AddAndEditSub = ({member,handleInput,saveMember,componentName}) => {
    const navigate = useNavigate();
    return (
    <div className="h-screen bg-black text-white flex flex-col  items-center pt-6">
      <div
        className="border-2 p-4 rounded-lg h-[80%] w-[90%] sm:w-[70%] md:w-[60%] 
      lg:w-[50%] bg-slate-500 flex flex-col justify-between items-center "
      >
        <h1 className="text-6xl text-center font-bold">{componentName}</h1>
        <div className="flex flex-col h-[85%] justify-around">
          <div className=" my-2 flex items-center text-lg font-bold">
            <p>Name : </p>
            <input 
            className="bg-gray-800 pl-2 grow border rounded-md focus:bg-blue-500 "
              name="name"
              defaultValue={member?.name}
              type="text"
              onChange={handleInput}
            />
          </div>
          <div className=" my-2 flex items-center text-lg font-bold">
            <p>Email : </p>
            <input 
            className="bg-gray-800 pl-2 grow border rounded-md focus:bg-blue-500 "
              name="email"
              defaultValue={member?.email}
              type="email"
              onChange={handleInput}
            />
          </div>
          <div className=" my-2 flex items-center text-lg font-bold">
            <p>City : </p>
            <input 
            className="bg-gray-800 pl-2 grow border rounded-md focus:bg-blue-500 "
              name="city"
              defaultValue={member?.city}
              type="text"
              onChange={handleInput}
            />
          </div>
          <div className="h-20 flex justify-center items-center">
            <button  className="mx-2 border-2 border-black bg-green-600 p-2 rounded-lg hover:bg-green-400 duration-500 hover:border-blue-400 " onClick={saveMember}>Update</button>
            <button   className="mx-2 border-2 border-black bg-red-600 p-2 rounded-lg hover:bg-red-400 duration-500 hover:border-blue-400 " onClick={() => navigate("/main_page/subscriptions")}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAndEditSub;
