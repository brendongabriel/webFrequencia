import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Menu from "../pages/Menu";
import Cadastrar from "../pages/Cadastrar";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Menu} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/cadastrar" exact component={Cadastrar} />
  </Switch>
);

export default Routes;
