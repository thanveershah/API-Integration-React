import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <ul className="justify-content-center nav pt-2">
        <li className="nav-item pr-2">
          <Link to="/">
            <span className="btn btn-primary">Home</span>
          </Link>
        </li>
        <li className="btn btn-dark">
          <Link to="/about">
            {" "}
            <span style={{ color: "white" }}>API</span>{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
