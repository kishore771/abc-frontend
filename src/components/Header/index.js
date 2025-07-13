import React from "react";
import "./index.css"; // Your custom CSS
import { Link } from "react-router-dom"; // ✅ Important: import Link

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li className="list-item">About</li>
          <li className="list-item">Services</li>
          <li className="list-item">
            <Link to="/cms" className="cms-link">CMS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
