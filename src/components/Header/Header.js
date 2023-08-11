import React from "react";
import "./Header.css";

import { Link, useLocation } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function Header() {
  const location = useLocation(); //se va

  return (
    <header className="header">
      <Navigation />
      <hr className="header__line" />
    </header>
  );
}
