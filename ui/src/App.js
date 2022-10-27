import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import User from "./Component/User";
import AllUser from "./Component/AllUser";
import Header from "./Component/Header";
import Logout from "./Component/Logout";
import ReginalManager from "./Component/ReginalManager";
import BranchManager from "./Component/BranchManager";
import SRexhecutive from "./Component/SRexhecutive";
import Exhecutive from "./Component/Exchecutive";
import Zonalmanager from "./Component/Zonalmanager";
import Ceo from "./Component/Ceo";
import { UserContext } from ".";
import { useReducer } from "react";
import { reducer, initialstate } from "./Component/UseReduced";

function App() {
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <>
        <BrowserRouter>
          <Header />
          <Routes>
            {/* <Route path  = "/" element = {role?<Navigate to="/AllUser"/>:<Navigate to="/Login"/>}/> */}
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/User" element={<User />} />
            <Route path="/AllUser" element={<AllUser />} />
            <Route path="/Ceo" element={<Ceo />} />
            <Route path="/ReginalManager" element={<ReginalManager />} />
            <Route path="/BranchManager" element={<BranchManager />} />
            <Route path="/Zonalmanager" element={<Zonalmanager />} />
            <Route path="/SRexhecutive" element={<SRexhecutive />} />
            <Route path="/Exhecutive" element={<Exhecutive />} />
            <Route path="/Logout" element={<Logout />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
