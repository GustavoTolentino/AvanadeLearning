import React from "react";
import ReactDOM from "react-dom";
import { Login } from "./pages/Login";
import { Cadastro } from "./pages/Cadastro";
import { Home } from "../src/pages/Home/home";
import { Curso } from "./pages/Curso/curso";
import { Instituicao } from "./pages/Forms/Instituicao";
import { Aula } from "./pages/Aula";
import { CadastrarCurso } from "./pages/Forms/Curso";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const routing = (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
      <Route path="/curso" component={Curso} />
      <Route path="/cadastrarCurso" component={CadastrarCurso} />
      <Route path="/instituicao" component={Instituicao} />
      <Route path="/aula/:idAula" component={Aula} />
      <Route path="*" component={Home} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
