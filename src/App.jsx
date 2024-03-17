import React, { Suspense, useState } from "react";
import Display from "./components/Display";
import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Suspense fallback={<h1>loading...</h1>}>
        <NavBar></NavBar>
        <Routes>
          {/* <Route path="/" element={<Navigate replace to="/main" />}></Route> */}
          <Route path="/" element={<Display />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
