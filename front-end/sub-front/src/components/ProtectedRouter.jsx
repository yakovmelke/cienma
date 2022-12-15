import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const ProtectedRouter = ({ children }) => {
  const { user } = UserAuth();

  const navigate = useNavigate();
  if (user?.id != undefined) {
    navigate("/");
  } else {
    return children;
  }
};

export default ProtectedRouter;
