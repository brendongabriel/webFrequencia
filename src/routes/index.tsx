import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Menu from "../pages/Menu";
import Cadastrar from "../pages/Cadastrar";
import EscolherData from "../pages/EscolherData";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Menu} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/cadastrar" exact component={Cadastrar} />
    <Route path="/escolherdata" exact component={EscolherData} />
  </Switch>
);

export default Routes;
