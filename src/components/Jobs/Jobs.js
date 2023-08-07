import React from "react";

import Card from "../Card/Card"; //Importa el componente Card
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons"; // Importa el icono faEye

import "./Jobs.css";

export default function Jobs(props) {
  const itemsPerPage = 6; // Número de trabajos por página
  const [visibleJobs, setVisibleJobs] = React.useState([]); // Estado para controlar las tarjetas visibles
  const [currentPage, setCurrentPage] = React.useState(1); //Estado para controlar la página actual

  // Función para cargar más tarjetas
  // const handleLoadMore = () => {
  //   setCurrentPage((prevPage) => prevPage + 1);
  // };

  // Función para cambiar de página
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  React.useEffect(() => {
    // Calcula el índice inicial y final de trabajos para la página actual
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    //Seleccionala trabajos en función del rango calculado
    setVisibleJobs(props.jobs.slice(startIndex, endIndex));
  }, [currentPage, props.jobs]);

  return (
    <div className="jobs">
      <h1 className="jobs__title">Encuentra tu Trabajo TI </h1>

      <div className="jobs__cards">
        {visibleJobs.map((job) => (
          <Card
            key={job.id}
            job={job}
            name={job.name}
            company={job.company}
            categories={job.categories}
            levels={job.levels}
            locations={job.locations}
            refs={job.refs.landing_page}
            publication_date={job.publication_date}
            tags={job.tags}
          />
        ))}
      </div>

      {/* Controles de paginación */}
      {props.jobs.length > itemsPerPage && (
        <div className="jobs__pagination">
          {Array.from(
            { length: Math.ceil(props.jobs.length / itemsPerPage) },
            (_, index) => (
              <button
                key={index}
                className={`jobs__pagination-button ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                onClick={() => handleChangePage(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      )}

      {/* Botón "Ver más" para cargar más tarjetas */}
      {/* {visibleJobs.length < props.jobs.length && (
        <button className="jobs__button" onClick={handleLoadMore}>
          Ver más trabajos{" "}
          <FontAwesomeIcon icon={faEye} style={{ color: "#30307e" }} />
        </button>
      )} */}
    </div>
  );
}

{
}
