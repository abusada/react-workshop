import React from "react";
import Slider from "../Components/Slider";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";
import First from "./Intro_1";
import Second from "./What_2";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: `calc(100vh - ${theme.spacing.unit * 3}px)`,
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
    overflow: "hidden"
  }
});

class Slides extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs>
          {[First, Second].map((Slide, index) => (
            <Paper key={index} elevation={4} className={classes.paper}>
              <Grid container wrap="nowrap" className={classes.slideContainer}>
                <Grid item xs>
                  <Slide />
                </Grid>
              </Grid>
            </Paper>
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Slides);
