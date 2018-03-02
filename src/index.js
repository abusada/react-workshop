import React from "react";
import { render } from "react-dom";

import Reboot from "material-ui/Reboot";

import Twitter from "./Twitter";
import Slides from "./Slides";

const App = () => (
  <div>
    <Reboot />
    <Slides />
  </div>
);

render(<App />, document.getElementById("root"));
