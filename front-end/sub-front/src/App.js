import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRouter from "./components/ProtectedRouter";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function App() {
  

  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<ProtectedRouter><Account /></ProtectedRouter>} />

        </Routes>
      </AuthContextProvider>
    <ToastContainer/>
    </>
  );
}

export default App;
