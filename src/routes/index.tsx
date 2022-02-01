import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Cadastrar from "../pages/Cadastrar";
import Editar from "../pages/Editar";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/cadastrar" exact component={Cadastrar} />
    <Route path="/editarAluno/:id" exact component={Editar} />
    
  </Switch>
);

export default Routes;
