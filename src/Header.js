import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1>Simple Form</h1>
      <div className="header__font">
        <NavLink to="/" activeClassName="header__link1" exact>
          <p>Home</p>
        </NavLink>
        <NavLink to="/table" activeClassName="header__link1">
          <p>Table</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
