import React from "react";
import "./Card.css";

export default function Card(props) {
  // Función para formatear la fecha en "día / mes / año"
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="card">
      <p className="card__title">{props.name}</p>
      <hr class="header__line"></hr>
      <p className="card__info">
        <span className="card__info-color">Fecha:</span>{" "}
        {formatDate(props.publication_date)}
      </p>
      <p className="card__info">
        <span className="card__info-color">Compañía:</span> {props.company.name}
      </p>
      <p className="card__info">
        <span className="card__info-color">Categoría:</span>{" "}
        {props.categories[0]?.name}
      </p>
      <p className="card__info">
        <span className="card__info-color">Nivel: </span>
        {props.levels[0]?.name}
      </p>
      <p className="card__info">
        <span className="card__info-color">Ubicación:</span>{" "}
        {props.locations[0]?.name}
      </p>

      <button
        className="card__button"
        onClick={() => window.open(props.refs, "_blank")}
      >
        Ver más información
      </button>
    </div>
  );
}
