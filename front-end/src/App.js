import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CreateAccount from "./pages/CreateAccount";
import MainPage from "./pages/MainPage";
import Users from "./pages/users/Users";
import EditUser from "./pages/users/EditUser";
import AddUser from "./pages/users/AddUser";
import Movies from "./pages/movies/Movies";
import AddMovie from "./pages/movies/AddMovie";
import EditMovie from "./pages/movies/EditMovie";
import Subscriptions from "./pages/subscriptions/Subscriptions";
import AddSubscription from "./pages/subscriptions/AddSubscription";
import EditSubscription from "./pages/subscriptions/EditSubscription";
import SelectedMovie from "./pages/movies/SelectedMovie";
import SelectedSub from "./pages/subscriptions/SelectedSub";
import { useSelector } from "react-redux";
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"


function App() {
  const loginUser = useSelector((log) => log.login);
  console.log(loginUser);
  return (
    <div className="App font-mono">
      {/* <div className="flex justify-center">
        <h1 className=" fixed text-slate-400 text-center  text-2xl font-black ">
          Yakov`s Movies - Subscriptions Web Site
        </h1>
      </div> */}
      <Routes>
        <Route path="" element={<LoginPage />} />
        <Route path="create_account" element={<CreateAccount />} />
        <Route path="main_page" element={<MainPage />}>
          <Route path="users" element={<Users />} />
          <Route path="add_user" element={<AddUser />} />
          <Route path="edit_user/:id" element={<EditUser />} />

          <Route path="movies" element={<Movies />} />
          <Route path="add_movie" element={<AddMovie />} />
          <Route path="edit_movie/:id" element={<EditMovie />} />
          <Route path="selected_movie/:id" element={<SelectedMovie />} />

          <Route path="subscriptions" element={<Subscriptions />} />
          <Route path="add_member" element={<AddSubscription />} />
          <Route path="edit_member/:id" element={<EditSubscription />} />
          <Route path="selected_sub/:id" element={<SelectedSub />} />
        </Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
