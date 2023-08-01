import React from "react";
import './Main.css';
import working from "../../images/working2.svg";

export default function Main() {

  function handleVerTrabajoSonado() {
      // Redirigimos a la página Jobs.js al hacer clic en el botón
      window.location.href = '/jobs';
  }

    
    return (
      <div className="main">

      <h1 className="main__title">Encuentra tu <span className="main__title-color">trabajo soñado</span> ahora</h1>
      <h2>Busca nuevas <span className="main__subtitle-color">oportunidades laborales</span>, queremos que trabajes feliz</h2>
  

      <img className="main__img" src={working} alt="working" />
      {/* Usamos el componente Link de react-router-dom para navegar a Jobs.js */}
      <button className="main__button" onClick={handleVerTrabajoSonado}>Ver mi trabajo soñado</button>
    </div>
    );
  }