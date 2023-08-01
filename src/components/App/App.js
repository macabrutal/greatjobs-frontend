import React from 'react';

import { Router, Routes, Route } from 'react-router-dom'; 


import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
import Jobs from '../../components/Jobs/Jobs';
import Footer from '../../components/Footer/Footer'
import './App.css';

import api from "../../utils/api";
import { CurrenInfoContext } from '../../context/CurrenInfoContext';

function App() {

  const [jobs, setJobs] = React.useState([]); //estado de trabajos
  const [currentInfo, setCurrentInfo] = React.useState([]); 
  

  React.useEffect(() => {
    api
      .getInitialJobs()
      .then((json) => {
        setJobs(json);
      })
      .catch((error) => { });
  }, []);

  function getJobInfoById(id) {
    api
      .getJobInfo(id)
      .then((json) => {
        setCurrentInfo(json);
      })
      .catch((error) => { });
  }

 

  return (
    <div className="App"> 
        {/* <Main/> */}

    <CurrenInfoContext.Provider value={currentInfo}>
    
    <Header/>

        <Router> 
        <Routes>
          <Route exact path="/"> 
            <Main/>
          </Route>

          <Route path="/jobs">
              <Jobs jobs={jobs} getJobInfoById={getJobInfoById} />
            </Route>

          </Routes>
        </Router>

        </CurrenInfoContext.Provider>
    <Footer/>

    </div>
  );
}

export default App;

