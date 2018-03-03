import React from "react";
import { YamsaferLogo, ReactLogo, HeartLogo } from "../Components/Logo";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";

function Intro(props) {
  return (
    <Grid
      container
      justify={"center"}
      alignItems={"center"}
      style={{ textAlign: "center" }}
    >
      <Grid item xs>
        <Grid container justify={"center"} alignItems={"center"}>
          <Grid item xs={4}>
            <ReactLogo height={400} />
          </Grid>
          <Grid item xs={4}>
            <HeartLogo loop />
          </Grid>
          <Grid item xs={4}>
            <YamsaferLogo height={400} />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="display2">
              <code>{"<WithFarisAbsuada />"}</code>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              An introduction to modern web development using &nbsp;
              <strong>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://reactjs.org/"
                >
                  React
                </a>
              </strong>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Intro;
