import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start"; // Ensure Home.jsx exists in the same directory
import UserLogin from "./pages/UserLogin";
import UserSignUp from "./pages/UserSignUp";
import CaptainSignUp from "./pages/CaptainSignUp";
import CaptainLogin from "./pages/CaptainLogin";
import Home from "./pages/Home"; 
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
import CaptainLogout from "./pages/CaptainLogout";
import Riding from "./pages/Riding";



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/user-ride" element={<Riding/>}/>
        <Route path="/captain-login" element={<CaptainLogin />} /> 
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route 
          path="/home" 
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          } 
        />
        <Route path="logout" element={<UserLogout />} />
        <Route path="captain-home" element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>
        } />
        <Route path="captain-logout" element={<CaptainLogout />} />
      </Routes>
    </div> 
  );
};

export default App;
