import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";
import logo from "./logo.svg";

function Navbar() {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <div className="navbar">
      <NavLink to="/">
        <img src={logo} />
      </NavLink>
      <div className="nav-links">
        <NavLink to="/">00 Home</NavLink>
        <NavLink to="/destination">01 Destination</NavLink>
        <NavLink to="/crew">02 Crew</NavLink>
        <NavLink to="/technology">03 Technology</NavLink>
      </div>

      <div
        className={`nav__hamburger ${mobileNav ? "active" : ""}`}
        onClick={() => setMobileNav(!mobileNav)}
      >
        <div className="cont">
          <div className="line line__1"></div>
          <div className="line line__2"></div>
          <div className="line line__3"></div>
        </div>
      </div>
      {mobileNav && (
        <div className="mobile-nav">
          <NavLink to="/">00 Home</NavLink>
          <NavLink to="/destination">01 Destination</NavLink>
          <NavLink to="/crew">02 Crew</NavLink>
          <NavLink to="/technology">03 Technology</NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;
