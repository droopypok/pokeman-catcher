import React from "react";
import Display from "./components/Display";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Display />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
