import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Add from './components/pages/Add';
import Edit from './components/pages/Edit';
import NotFound from './components/pages/NotFound';
import Alerts from './components/layout/Alerts';

import AlertState from './context/alert/AlertState';
import FoodState from './context/food/FoodState';

import './App.css';

function App() {
  return (
    <FoodState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alerts />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/add' component={Add} />
                <Route exact path='/edit' component={Edit} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </FoodState>
  );
}

export default App;
