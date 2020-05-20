import React from 'react';
import Header from './components/Header/Header';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className='app'>
    <Router>
      <Header/>
      <Switch>
        <Route path='/home'>
        home
        </Route>
        <Route path='/about'>
         about
        </Route>
        <Route path='/contact'>
         contact
        </Route>
      </Switch>
    </Router>
    </div>
  )
}

export default App;
