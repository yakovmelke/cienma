import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import SubComponent from "../../utils/SubComponent";

const SelectedSub = () => {
  const userLogin = useSelector((sub) => sub.login);
  const { id } = useParams();
  const [member, setMember] = useState({
    _id: 1,
    name: "",
    email: "",
    city: "",
  });
  const getAllMembersInRedux = useSelector((sub) => sub.members);
  useEffect(() => {
    setMember(getAllMembersInRedux.find((mem) => mem._id === id));
  }, [id]);

  return (
    <div className="bg-black text-white flex flex-col items-center pt-6">
      <h1 className="text-6xl text-center font-bold">selected Subscription</h1>
      <div className=" w-[95%] border-b-2 border-gray-300 mb-2 text-lg flex  justify-center items-center py-4">
        <div className="h-16 flex justify-center items-center">
          <Link to={""}>
            <button className="mx-2 border-2 bg-green-600 p-2 rounded-lg hover:bg-green-400 duration-500 hover:border-blue-400 hover:p-3">
              All Members
            </button>
          </Link>
        </div>
        <div className="h-16 flex justify-center items-center">
          {userLogin.permissions.createSubscriptions && (
            <Link to={"/main_page/add_member"}>
              <button className="mx-2 border-2 bg-green-600 p-2 rounded-lg hover:bg-green-400 duration-500 hover:border-blue-400 hover:p-3">
                Add Member
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="w-[90%] flex justify-center">
        <SubComponent member={member} />
      </div>
    </div>
  );
};

export default SelectedSub;
