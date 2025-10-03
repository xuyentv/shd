import "./Header.css";
import SocialSubscrible from "../SocialSubscrible/SocialSubscrible";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        <span className="logo-icon">SHDMedia.net</span>
      </a>
      <nav className="nav">
        <a href="/">Home</a>
        <div className="dropdown">
          <a href="/pages" className="dropbtn">Web Hosting</a>
          <div className="dropdown-content">
            <a href="/pages/shared-hosting">Shared Hosting</a>
            <a href="/pages/vps">VPS</a>
            <a href="/pages/dedicated">Dedicated Server</a>
          </div>
        </div>

        <a href="/blogs">Review</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <SocialSubscrible />
    </header>
  );
};

export default Header;
