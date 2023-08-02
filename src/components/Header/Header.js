import React from "react";
import "./Header.css";
import logo from "../../images/logo-greatjobs.png";
import { Link, useLocation } from "react-router-dom";

export default function Header(props) {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header__info">
        <Link to="/" className="header__logo-link">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>

        {location.pathname === "/" && (
          <Link to="/jobs" className="header__link">
            Trabajos
          </Link>
        )}

        {location.pathname === "/jobs" && (
          <Link to="/" className="header__link">
            Sobre GreatJobs
          </Link>
        )}
      </div>
      <hr className="header__line" />
    </header>
  );
}
