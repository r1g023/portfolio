import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="header">
      {/* NAV BAR LINKS TO ROUTES */}
      <nav className="nav-links">
        <Link className="nav-link" to="/">
          {/* will import RL image here  */}
        </Link>
        <Link className="nav-link" to="/about">
          about 📍
        </Link>

        <Link className="nav-link" to="/projects">
          projects ⚒️
        </Link>

        <Link className="nav-link" to="/contact">
          contact 📧
        </Link>
      </nav>
    </div>
  );
};

export default NavigationBar;
