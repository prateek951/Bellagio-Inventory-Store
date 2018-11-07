import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route exact path="/store/:id" component={App} />
      <Route exact component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default Router;
