import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src="./images/logo.png" alt="logo"></img>
      <div className="navbar">
        <ul className="navbar-items">
          <li>Home</li>
          <li>Why Clairco?</li>
          <li>Case Studies</li>
          <li>About Us</li>
          <li>Blog</li>
        </ul>

        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default Header;
