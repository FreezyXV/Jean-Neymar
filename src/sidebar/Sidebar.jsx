import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="sidebarTitle">Jean Neymar</h1>
      <div className="links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link activeLink" : "link")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "link activeLink" : "link")}
        >
          A propos
        </NavLink>
        <NavLink
          to="/books"
          className={({ isActive }) => (isActive ? "link activeLink" : "link")}
        >
          Oeuvres
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
