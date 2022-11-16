import React from "react";
import { useNavigate } from "react-router-dom";

const AddAndEditUser = ({ user, updateEdit, userChanges, componentName ,permissions,permissionsChanges}) => {
    const navigate =useNavigate()
  const checkPermissionName = (permission) => {
    switch (permission) {
      case "viewSubscriptions":
        return "View Subscriptions";

      case "createSubscriptions":
        return "Create Subscriptions";

      case "updateSubscriptions":
        return "Update Subscriptions";

      case "deleteSubscriptions":
        return "Delete Subscriptions";

      case "viewMovies":
        return "View Movies";

      case "createMovies":
        return "Create Movies";

      case "updateMovies":
        return "Update Movies";

      case "deleteMovies":
        return "Delete Movies";

      default:
        return "";
    }
  };
  const permissionsKeys = Object.keys(permissions);
  const permissionsValues = Object.values(permissions);
  return (
    <div className="h-screen  bg-gray-700 text-white flex flex-col  items-center pt-6">
      <div
        className="border-2 p-4 rounded-lg h-[85%] w-[90%] md:w-[70%] 
      lg:w-[50%] bg-slate-500 flex flex-col justify-between items-center "
      >
        <h1 className="text-6xl text-center font-bold">{componentName}</h1>
        <div className="flex flex-col h-[90%] justify-around">
          {componentName === 'Add User'&&<div className=" my-2 flex items-center text-sm font-bold">
            <p>Employ Number : </p>
            <input
             className="bg-gray-800 pl-2 grow border rounded-md focus:bg-blue-500 "
              onChange={userChanges}
              name="id"
              defaultValue={user?.id}
            />
          </div>
            }
          <div className=" my-2 flex items-center text-sm font-bold">
            <p>First Name : </p>
            <input
             className="bg-gray-800 pl-2 grow border rounded-md focus:bg-blue-500 "
              onChange={userChanges}
              name="firstName"
              defaultValue={user?.firstName}
            />
          </div>
          <div  className=" my-2 flex items-center text-sm font-bold">
           
            <p>Last Name : </p>
            <input
              className="bg-gray-800 pl-2 grow border rounded-md focus:bg-blue-500 "
              onChange={userChanges}
              name="lastName"
              defaultValue={user?.lastName}
            />
          </div>
          {user.createdDate && (
            <div  className=" my-2 flex items-center text-sm font-bold">
              <p>Created date:</p>
              <input
                className="bg-gray-800 pl-2 grow border rounded-md focus:bg-blue-500 "
                onChange={userChanges}
                placeholder={user?.createdDate}
                disabled={true}
              />
            </div>
          )}
          <div  className=" my-2 flex items-center text-sm font-bold">
            <p>User Name :</p>
            <input
              className="bg-gray-800 pl-2 grow border rounded-md focus:bg-blue-500 "
              onChange={userChanges}
              name="userName"
              defaultValue={user?.userName}
            />
          </div>
          <div  className=" my-2 flex items-center text-sm font-bold">
            <p>Session time out:</p>
            <input
              className="bg-gray-800 pl-2 grow border rounded-md focus:bg-blue-500 "
              onChange={userChanges}
              name="sessionTimeOut"
              defaultValue={user?.sessionTimeOut}
            />
          </div>
          <div  className=" my-2 flex items-center text-sm font-bold">
            <p>Admin:</p>
            <input
              onChange={userChanges}
              name="admin"
              type={"checkbox"}
              defaultChecked={user.admin}
            />
          </div>

          <div className="flex flex-wrap">
            <p>Permissions: </p>
            <ul className="flex flex-wrap items-center">
              {permissionsKeys.map((per, i) => (
                <li className="flex flex-wrap items-center mx-3" key={i}>
                  {checkPermissionName(per)}:
                  <input 
                    type="checkbox"
                    onChange={permissionsChanges}
                    name={per}
                    checked={permissionsValues[i]}
                    
                  />.
                </li>
              ))}
            </ul>
          </div>
          <div className="h-16 flex justify-center items-center">
            <button
              className="mx-2 border-2 border-black bg-green-600 p-2 rounded-lg hover:bg-green-400 duration-500 hover:border-blue-400"
              onClick={updateEdit}
            >
              Update
            </button>
            <button
              className="mx-2 border-2 border-black bg-red-600 p-2 rounded-lg hover:bg-red-400 duration-500 hover:border-blue-400"
              onClick={() => navigate("/main_page/users")}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAndEditUser;
