import React from "react";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";
import SlideContainer from "./Components/SlideContainer";

import First from "./Intro_1";
import Second from "./What_2";
import Third from "./JsxAndBabel_3";
import Fourth from "./Tweet_4";

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
    const slides = [First, Second, Third, Fourth];
    // const slides = [Fourth];
    return (
      <Grid container className={classes.root}>
        <Grid item xs>
          {slides.map((Slide, index) => (
            <SlideContainer key={index}>
              <Slide />
            </SlideContainer>
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Slides);
