mport React from "react";0import "./Header.css"
export default function () {
 return (
    <header className="header">
      <a href="/" className="logo">
        <span className="logo-icon"></span>
        Clarity
      </a>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/pages">Pages</a>
        <a href="/blogs">Blogs</a>
        <a href="/support">Support</a>
      </nav>
      <div className="social-subscribe">
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <a href="#" className="subscribe-btn">Subscribe</a>
      </div>
    </header>
  );
}
