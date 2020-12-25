import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/" className="header__link1 ">
        <h4 className="header__head" active>Form</h4>
      </Link>
      <Link to="/table" className="header__link2 ">
        <h4 className="header__head">Table</h4>
      </Link>
    </div>
  );
}

export default Header;
