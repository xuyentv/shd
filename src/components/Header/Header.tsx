import React from "react";
import "./Header.css";
import SocialSubscrible from "../SocialSubscrible/SocialSubscrible";
const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        <span className="logo-icon"></span>
      </a>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/pages">Pages</a>
        <a href="/blogs">Blogs</a>
        <a href="/support">Support</a>
      </nav>
      <SocialSubscrible />
    </header>
  );
};

export default Header;
