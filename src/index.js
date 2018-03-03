import React from "react";

import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Reboot from "material-ui/Reboot";
import Twitter from "./Twitter";
import Slides from "./Slides";
import Training from "./Training";
const App = () => [
  <Reboot key="reboot" />,
  <BrowserRouter key="app">
    <Switch>
      <Route exact path="/" component={Slides} />
      <Route path="/twitter" component={Twitter} />

      <Route exact path="/training" component={Training} />
    </Switch>
  </BrowserRouter>
];

render(<App />, document.getElementById("root"));
