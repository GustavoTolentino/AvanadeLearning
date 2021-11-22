<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { Home } from "../src/pages/Home/home";
import { Curso } from "./pages/Curso/curso";
import { Instituicao } from "./pages/Forms/Instituicao";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
=======
import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from './pages/Login';
import { Cadastro } from './pages/Cadastro';
import { Home } from '../src/pages/Home/home';
// // <<<<<<< HEAD
// import { Curso } from '../src/pages/Curso/curso';
// =======
import { Curso } from './pages/Curso/curso';
// >>>>>>> 1386d3e801e67a34c96a7e26745b993c16c3fdfc
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
>>>>>>> 3930a1b7427d421b20b9b758273e3c357be9deb2

export const routing = (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/curso" component={Curso} />
      <Route path="/instituicao" component={Instituicao} />
      <Route path="*" component={Home} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
