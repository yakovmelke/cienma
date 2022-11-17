import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteUser, getUsersData } from "../../apiData/UsersApiData";

export default function Users() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "",
      userName: "",
      sessionTimeOut: "",
      createdDate: "",
      permissions: ["a", "b"],
    },
  ]);
 
  const getUsersFromRedux = useSelector((user) => user.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setUsers(getUsersFromRedux);
  }, [getUsersFromRedux]);
const checkPermissionName = (permission)=>{
  switch (permission) {
    case "viewSubscriptions":
      
      return "View Subscriptions"
  
    case "createSubscriptions":
      
      return "Create Subscriptions"
  
    case "updateSubscriptions":
      
      return "Update Subscriptions"
  
    case "deleteSubscriptions":
      
      return "Delete Subscriptions"
  
    case "viewMovies":
      
      return "View Movies"
  
    case "createMovies":
      
      return "Create Movies"
  
    case "updateMovies":
      
      return "Update Movies"
  
    case "deleteMovies":
      
      return "Delete Movies"
  
    default:
     return ""
  }
}

  return (
    <div className="bg-black text-white flex flex-col items-center pt-6">
      <h1 className="text-6xl text-center font-bold">Users</h1>
      <div className=" w-[95%] border-b-2 border-gray-300 mb-2 text-lg flex  justify-center items-center py-4">
        <div className="h-16 flex justify-center items-center">
          <Link to={""}>
            <button className="mx-2 border-2 bg-green-600 p-2 rounded-lg hover:bg-green-400 duration-500 hover:border-blue-400 hover:p-3">
              All Users
            </button>
          </Link>
        </div>
        <div className="h-16 flex justify-center items-center">
          <Link to={"/main_page/add_user"}>
            <button className="mx-2 border-2 bg-green-600 p-2 rounded-lg hover:bg-green-400 duration-500 hover:border-blue-400 hover:p-3">
              Add User
            </button>
          </Link>
        </div>
      </div>
      <div className="w-[95%] flex flex-wrap justify-around mx-5 text-center">
        {users.map((user) => {
          const permissionsKeys = Object.keys(user.permissions);
          const permissionsValues = Object.values(user.permissions);
          return (
            <div
              key={user.id}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] p-3 border border-stone-300 rounded-lg bg-slate-200 text-black bg-opacity-60  shadow-lg shadow-white mb-6 text-center hover:bg-red-500 hover:text-white duration-500"
            >
              <p>
                Name:{user?.firstName} {user?.lastName}
              </p>
              <p>User Name:{user.userName}</p>
              <p>Session time out:{user.sessionTimeOut}</p>
              <p>Created date:{user.createdDate}</p>
              <div className="flex flex-wrap justify-center items-center" >
                <p>Permissions: </p>
                <ul className="flex flex-wrap justify-center items-center">
                  {permissionsKeys.map((per, i) => (
                    <li key={i}>
                      {checkPermissionName(per)}{" "}
                      <input 
                      
                        type="checkbox"
                        name={per}
                        readOnly
                        checked={permissionsValues[i]}
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="h-16 flex justify-center items-center">

              <button  className="mx-2 border-2 border-black bg-green-600 p-2 rounded-lg hover:bg-green-400 duration-500 hover:border-blue-400 hover:p-3" 
                onClick={() => navigate(`/main_page/edit_user/${user.id}`)}
                >
                Edit
              </button>
              <button  className="mx-2 border-2 border-black bg-red-600 p-2 rounded-lg hover:bg-red-400 duration-500 hover:border-blue-400 hover:p-3" onClick={() => deleteUser(user.id, dispatch)}>
                Delete
              </button>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
