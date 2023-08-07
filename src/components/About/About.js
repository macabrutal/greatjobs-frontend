import React from "react";
import "./About.css";
import autor from "../../images/maca-img.png";

export default function About() {
  return (
    <div className="about__info">
      <img className="about__autor" src={autor} alt="autor" />

      <div className="about__autor-content ">
        <h1 className="about__abaut">Acerca del autor</h1>
        <p className="about__text">
          Soy UI/UX Designer, estudiando{" "}
          <span className="about__text-color">Desarrollo web en TripleTen</span>{" "}
          <br />
          <br />
          Me apasiona estudiar, una de mis mayores motivaciones es aprender; me
          interesa el prendizaje continuo en nuevas tecnologías, colaboración en
          proyectos innovadores e investigación de tendencias para mejorar la
          experiencia de los usuarios.
        </p>
      </div>
    </div>
  );
}
