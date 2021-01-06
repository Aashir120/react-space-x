import React from 'react';
import Launch from './components/Launch';
import LaunchDetails from './components/LaunchDetails';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css'
import { Home } from './components/Home';

const App =()=>{
  return(
  <div className="App">
    <Router>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/launch" component={Launch}/>
      <Route exact path="/launch/:id" component={LaunchDetails}/>
      </Switch>
    </Router>
  </div>
  )
}

export default App;