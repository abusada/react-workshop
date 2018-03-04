import React from "react";
import { YamsaferLogo, ReactLogo, HeartLogo } from "../App/Lottie";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import { Link } from "react-router-dom";

function Intro(props) {
  return (
    <Grid
      container
      justify={"center"}
      alignItems={"center"}
      style={{ height: "90vh", textAlign: "center" }}
    >
      <Grid item xs>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="display2" style={{ position: "relative" }}>
              <a
                target="_blank"
                href="https://codesandbox.io/s/github/abusada/react-workshop"
              >
                <Button size="large" variant="raised" color="primary">
                  Let's Begin
                </Button>
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Intro;
