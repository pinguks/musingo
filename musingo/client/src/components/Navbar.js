import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-container">
        <NavLink exact to="/home" activeClassName="active">
          <button className="Navbar-btn">
            <i className="icon ion-md-home" />
          </button>
        </NavLink>
        <NavLink to="/search" activeClassName="active">
          <button className="Navbar-btn">
            <i className="icon ion-md-search" />
          </button>
        </NavLink>
        <NavLink to="/player" activeClassName="active">
          <button className="Navbar-btn">
            <i className="icon ion-md-play" />
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
