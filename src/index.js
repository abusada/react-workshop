import React from "react";

import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Reboot from "material-ui/Reboot";
import Final from "./App/Page";
import Slides from "./Slides";
import Training from "./Training";
const App = () => [
  <Reboot key="reboot" />,
  <BrowserRouter key="app">
    <Switch>
      <Route exact path="/" component={Training} />
      <Route path="/app" component={Final} />
      <Route exact path="/intro" component={Slides} />
    </Switch>
  </BrowserRouter>
];

render(<App />, document.getElementById("root"));
