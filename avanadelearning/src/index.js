import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const routing = (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));