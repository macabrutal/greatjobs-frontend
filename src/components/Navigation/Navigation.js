import React from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo-greatjobs.png";

export default function Navigation() {
  const location = useLocation();

  return (
    <div className="navigation__info">
      <Link to="/">
        <img className="navigation__logo" src={logo} alt="logo" />
      </Link>

      {location.pathname === "/" && (
        <Link to="/jobs" className="navigation__link ">
          Trabajos TI
        </Link>
      )}

      {location.pathname === "/jobs" && (
        <Link to="/" className="navigation__link ">
          Sobre GreatJobs
        </Link>
      )}
    </div>
  );
}
