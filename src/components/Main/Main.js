import React, { useState } from "react";
import "./Main.css";
import working from "../../images/working2.svg";
import Preloader from "../Preloader/Preloader";

export default function Main() {
  const [isLoading, setIsLoading] = useState(false); //estado para controlar si el preloader

  function handleVerTrabajoSonado() {
    // Mostrar el preloader
    setIsLoading(true);

    // Simulación de tiempo de carga
    setTimeout(() => {
      // Ocultar el preloader
      setIsLoading(false);

      // Redirigir a la página Jobs.js
      window.location.href = "/jobs";
    }, 2000); // Cambia el tiempo a tu preferencia
  }

  return (
    <div className="main">
      <h1 className="main__title">
        Encuentra tu <span className="main__title-color">trabajo soñado</span>{" "}
        ahora
      </h1>
      <h2 className="main__subtitl">
        Busca nuevas{" "}
        <span className="main__subtitle-color">oportunidades laborales</span>,
        queremos que trabajes feliz
      </h2>

      <img className="main__img" src={working} alt="working" />
      {/* Usamos el componente Link de react-router-dom para navegar a Jobs.js */}
      <button className="main__button" onClick={handleVerTrabajoSonado}>
        Ver mi trabajo soñado
      </button>

      {/* Renderizar el preloader si isLoading es true  */}
      {isLoading && <Preloader />}
    </div>
  );
}
