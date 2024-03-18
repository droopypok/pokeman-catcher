import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <img
        className={styles.logo}
        src="../ProfilePictures/pokeman.png"
        alt=""
      />
      <header className="">
        <ul className={styles.navBar}>
          <li>
            <NavLink className={styles.link} to="/">
              Catch em' All!
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/Profile">
              Create New Profile
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default NavBar;
