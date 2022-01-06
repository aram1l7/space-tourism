import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.scss";
import logo from "./logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/">
        <img src={logo} />
      </NavLink>
      <div className="nav-links">
        <NavLink  to="/">
          00 Home
        </NavLink>
        <NavLink to="/destination">01 Destination</NavLink>
        <NavLink to="/crew">02 Crew</NavLink>
        <NavLink to="/technology">03 Technology</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
