import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="">
      <ul>
        <li>
          <NavLink to="/">Catch em' All!</NavLink>
        </li>
        <li>
          <NavLink to="/Profile">Create New Profile</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
