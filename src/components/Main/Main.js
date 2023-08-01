import React from "react";
import './Main.css';

export default function Main() {

  function handleVerTrabajoSonado() {
      // Redirigimos a la página Jobs.js al hacer clic en el botón
      window.location.href = '/jobs';
  }

    
    return (
      <div>
      <h1>¿Buscas tu trabajo soñado?</h1>
      <h3>Encuentra tu lugar para desarrollar al máximo tus aptitudes</h3>
      <img src="ruta-de-la-imagen.png" alt="Imagen de búsqueda de trabajo" />
      {/* Usamos el componente Link de react-router-dom para navegar a Jobs.js */}
      <button onClick={handleVerTrabajoSonado}>Ver mi trabajo soñado</button>
    </div>
    );
  }