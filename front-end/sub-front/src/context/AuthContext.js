import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [subscriber, setSubscriber] = useState({});

  async function getAllMovies() {
    const { data } = await axios.get("http://localhost:8001/movies");
    setMovies(data);
    return data;
  }
  useEffect(() => {
    getAllMovies();
  }, [user]);

  async function findSubscription() {
    const { data: subscriptions } = await axios.get(
      "http://localhost:8001/subscriptions"
    );
    const sub = subscriptions.find((sub) => sub.memberId === user._id);
    if (sub) {
      setSubscriber(sub);
    }
  }

  useEffect(() => {
    findSubscription();
  }, [user._id]);

  useEffect(() => {
    findSubscription();
  }, [user._id]);
  async function signUp(obj) {
    const { data: members } = await axios.get("http://localhost:8001/members");

    const memberUserName = members.find(
      (element) => element.userName === obj.userName
    );
    const memberEmail = members.find((element) => element.email === obj.email);

    if (!memberUserName && !memberEmail) {
      const result = await axios.post("http://localhost:8001/members", obj);
      return result;
    }
    if (memberUserName) {
      throw "The user name is already taken";
    }
    if (memberEmail) {
      throw "The email is already taken";
    }
  }
  async function logIn(userName, password) {
    const { data: members } = await axios.get("http://localhost:8001/members");
    const member = members.find((element) => element.userName === userName);

    if (member.password != password) {
      throw false;
    } else {
      setUser(member);

      return true;
    }
  }
  function logOut() {
    setUser({});
    return true;
  }

  return (
    <AuthContext.Provider
      value={{
        signUp,
        logIn,
        logOut,
        user,
        movies,
        getAllMovies,
        subscriber,
        setSubscriber,
        findSubscription
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function UserAuth() {
  return useContext(AuthContext);
}
