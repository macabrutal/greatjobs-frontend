import React from "react";
import "./Footer.css";
import rayo from "../../images/🦆 icon-lightning.png";

export default function Footer() {
  return (
    <div className="footer">
      <hr className="footer__line" />
      <div className="footer__info">
        <p className="footer__text">
          © 2023 <span className="footer__text-color">Great</span>
          <span className="footer__text-color2">Jobs</span> by Maca Rodríguez
        </p>
        <img className="footer__rayo" src={rayo} alt="rayo" />
      </div>
    </div>
  );
}
