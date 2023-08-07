import React from "react";
import "./Header.css";

import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  const location = useLocation(); //se va

  return (
    <header className="header">
      <Navigation />
      {/* <div className="header__info">
        <Link to="/" className="header__logo-link">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>

        {location.pathname === "/" && (
          <Link to="/jobs" className="header__link">
            Trabajos TI
          </Link>
        )}

        {location.pathname === "/jobs" && (
          <Link to="/" className="header__link">
            Sobre GreatJobs
          </Link>
        )}
      </div> */}
      <hr className="header__line" />
    </header>
  );
}
