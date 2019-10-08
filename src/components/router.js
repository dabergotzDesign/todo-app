import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./app";
import Help from "./help";
import NotFound from "./not-found";

const Router = () => (
  <HashRouter basename="/">
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/help" component={Help} />
      <Route component={NotFound} />
    </Switch>
  </HashRouter>
);

export default Router;
