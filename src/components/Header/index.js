import React from "react";
import "./index.css"; // Assuming you have a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li className="list-item">About</li>
          <li className="list-item">Services</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;