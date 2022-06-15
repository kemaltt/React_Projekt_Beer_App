import React from "react";
import { Link } from "react-router-dom";
import logo from "./../images/Logo.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
}
