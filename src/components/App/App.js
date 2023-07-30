import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../../components/Header';
import Main from '../../components/Main';
import Jobs from '../../components/Jobs';
import Footer from '../../components/Footer'
import './App.css';

function App() {
  return (
    <div className="App"> 
    <Header/>

    <Router>
      <Switch>
        <Route exact path="/">
        <Main />
        </Route>

        <Route path="/">
        <Jobs />
        </Route>

      </Switch>
    </Router>

    <Footer/>

    </div>
  );
}

export default App;

