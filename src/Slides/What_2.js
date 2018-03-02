import React from "react";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Grid from "material-ui/Grid";

import FinalResult from "../Twitter";

function WhatWillWeDo(props) {
  return (
    <Grid container>
      <Grid item xs={12} sm={8}>
        <Typography variant="display1" gutterBottom>
          What We’re Building
        </Typography>
        <Typography>
          Together we are going to build a twitter like application, you can see
          the final result on the right side, it's interactive, login and start
          tweeting to see for yourself
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <section style={{ overflow: "hidden", maxHeight: "90vh" }}>
          <FinalResult />
        </section>
      </Grid>
    </Grid>
  );
}

export default WhatWillWeDo;
