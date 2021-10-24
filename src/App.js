import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import Dashboard from './pages/Dashboard';
import Finalize from './pages/Finalize';
import Results from './pages/Results';

function App() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route path='/finalize/:id'>
              <Finalize />
            </Route>
            <Route path='/results/:id'>
              <Results />
            </Route>
            <Redirect to='/' />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
