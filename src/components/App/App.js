import React from "react";

import { Routes, Route } from "react-router-dom";
import Jobs from "../Jobs/Jobs";
import Main from "../Main/Main";
import Layout from "../Layout/Layout";
import api from "../../utils/api"; //importar api.js
import Preloader from "../Preloader/Preloader";

import "./App.css";

import { CurrenInfoContext } from "../../context/CurrenInfoContext";

function App() {
  const [currentInfo, setCurrentInfo] = React.useState([]);
  const [jobs, setJobs] = React.useState([]); //estado de trabajos
  const [companies, setCompanies] = React.useState([]); //estado de trabajos
  const [isLoading, setIsLoading] = React.useState(true); //estado para controlar si el preloader

  React.useEffect(() => {
    api
      .getInitialJobs()
      .then((json) => {
        setJobs(json.results);
        setIsLoading(false); // Finaliza la carga de trabajos
      })
      .catch((error) => {
        console.error("Error getting jobs:", error);
        setIsLoading(false); // Finaliza la carga de trabajos en caso de error
      });
  }, []);

  React.useEffect(() => {
    api
      .getCompanies()
      .then((json) => {
        setCompanies(json.total);
        setIsLoading(false); // Finaliza la carga de trabajos
      })
      .catch((error) => {
        console.error("Error getting companies:", error);
      });
  }, []);

  return (
    <div className="App">
      <CurrenInfoContext.Provider value={currentInfo}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main companies={companies} />} />
            <Route
              path="jobs"
              element={
                isLoading ? (
                  <Preloader />
                ) : (
                  <Jobs jobs={jobs} companies={companies} />
                )
              }
            />
          </Route>
        </Routes>
      </CurrenInfoContext.Provider>
    </div>
  );
}

export default App;
