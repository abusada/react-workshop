import React from "react";
import { FirebaseProvider } from "./Components/Firebase";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Reboot from "material-ui/Reboot";
import Twitter from "./Twitter";
import Slides from "./Slides";

const App = () => [
  <Reboot key="reboot" />,
  <FirebaseProvider key="app">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Slides} />
        <Route path="/twitter" component={Twitter} />
      </Switch>
    </BrowserRouter>
  </FirebaseProvider>
];

render(<App />, document.getElementById("root"));
