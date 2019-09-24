import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Add from './components/pages/Add';
import Edit from './components/pages/Edit';
import Current from './components/pages/Current';
import NotFound from './components/pages/NotFound';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

import Register from './components/auth/Register';
import Login from './components/auth/Login';

import AlertState from './context/alert/AlertState';
import AuthState from './context/auth/AuthState';
import FoodState from './context/food/FoodState';
import setAuthToken from './utils/setAuthToken';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <FoodState>
        <AlertState>
          <Router>
            <div className='App'>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <Route exact path='/about' component={About} />
                  <PrivateRoute exact path='/add' component={Add} />
                  <PrivateRoute exact path='/edit' component={Edit} />
                  <Route exact path='/current' component={Current} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
      </FoodState>
    </AuthState>
  );
};

export default App;
