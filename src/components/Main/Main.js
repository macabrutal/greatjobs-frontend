import React, { useState } from "react";
import "./Main.css";
import working from "../../images/working2.png";
import Preloader from "../Preloader/Preloader";
import { Link } from "react-router-dom";

import Data from "../Data/Data"; //Importa el componente Data

export default function Main(props) {
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
        Encuentra tu{" "}
        <span className="main__title-color">trabajo TI soñado</span> ahora
      </h1>
      {/* <h2 className="main__subtitl">
        Busca nuevas{" "}
        <span className="main__subtitle-color">oportunidades laborales</span>,
        queremos que trabajes feliz
      </h2> */}

      <Data total={props.companies} />

      <img className="main__img" src={working} alt="working" />
      <div class="main__organic  main__rotacion "></div>
      <div class="main__organic2  main__rotacion "></div>
      <div class="main__organic3  main__rotacion "></div>
      {/* Usamos el componente Link de react-router-dom para navegar a Jobs.js */}
      <Link to={"/jobs"}>
        <button className="main__button" onClick={handleVerTrabajoSonado}>
          Ver mi trabajo soñado
        </button>
      </Link>

      {/* Renderizar el preloader si isLoading es true  */}
      {isLoading && <Preloader />}
    </div>
  );
}
