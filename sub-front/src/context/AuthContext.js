import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  async function signUp(obj) {
    const { data: members } = await axios.get("http://localhost:8001/members");
    console.log(members[0]);
    const memberUserName = members.find(
      (element) => element.userName === obj.userName
    );
    const memberEmail = members.find(
      (element) => element.email === obj.email
    );

    if (!memberUserName && !memberEmail) {
       const result = await axios.post("http://localhost:8001/members",obj);
      console.log(result);
      return result
    }
    if(memberUserName){
      throw "The user name is already taken";
    }
    if(memberEmail){
      throw "The email is already taken";
    }
  }
  async function logIn(userName, password) {
    const { data: members } = await axios.get("http://localhost:8001/members");
    const member = members.find((element) => element.userName === userName);

    if (member.password != password) {
      throw false;
    }
    setUser(member);
    return true;
  }
  function logOut() {
    setUser({});
  }

  return (
    <AuthContext.Provider value={{ signUp, logIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}
export function UserAuth() {
  return useContext(AuthContext);
}
