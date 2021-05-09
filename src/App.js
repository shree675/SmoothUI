import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from './components/home-page';
import FormPage from './components/form-page';
import Zyppys from './components/car';
import React from 'react';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/form' component={FormPage}></Route>
        <Route exact path='/car' component={Zyppys}></Route>
      </Switch>
    </Router>
  );
}

export default App;