import React from "react";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    minHeight: `calc(100vh - ${theme.spacing.unit * 3}px)`,
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
    overflow: "hidden"
  }
});

const SlideContaienr = ({ children, classes }) => (
  <Paper elevation={4} className={classes.paper}>
    <Grid container wrap="nowrap" className={classes.slideContainer}>
      <Grid item xs>
        {children}
      </Grid>
    </Grid>
  </Paper>
);

export default withStyles(styles)(SlideContaienr);
