import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Navbar.module.css";
import Friends from "../Friends/Friends";

const Navbar = () => {
  return (
    <div className={c.leftContent}>
      <div className={c.menu}>
        <NavLink to="/profile" className={c.prof}>
          Profile
        </NavLink>
      </div>
      <div className={c.menu}>
        <NavLink to="/dialogs">Messege</NavLink>
      </div>
      <div className={c.menu}>
        <NavLink to="/news">News</NavLink>
      </div>
      <div className={c.menu}>
        <NavLink to="/music">Music</NavLink>
      </div>
      <div className={c.menu}>
        <NavLink to="/settings">Settings</NavLink>
      </div>
      <div className={c.menu}>
        <NavLink to="/trenirovka">Trenirovka</NavLink>
      </div>
      <div className={c.menu}>

<NavLink to="/testSkill"  >TestSkill</NavLink>
      </div>
      <div>
        {/* <Friends /> */}
      </div>
    </div>
  );
};
export default Navbar;
