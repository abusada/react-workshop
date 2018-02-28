import React from "react";
import { render } from "react-dom";
import Slider from "./Components/Slider";
import Reboot from "material-ui/Reboot";

import Paper from "material-ui/Paper";

import Intro from "./Slides/Intro";
import TOC from "./Slides/TOC";

const App = () => (
  <div>
    <Reboot />
    <section>
      {[Intro, TOC].map(Slide => (
        <Paper
          style={{
            textAlign: "center",
            margin: 20,
            padding: 20
          }}
          elevation={4}
        >
          <Slide />
        </Paper>
      ))}
    </section>
  </div>
);

render(<App />, document.getElementById("root"));

{
  /* <Slider slides={[<Intro />, <TOC />]} /> */
}
