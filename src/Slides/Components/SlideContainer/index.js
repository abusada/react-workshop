import React from "react";
import Paper from "material-ui/Paper";
import Grid from "material-ui/Grid";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    overflow: "hidden",
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 4,
    minHeight: `calc(100vh - ${theme.spacing.unit * 2}px)`
  }
});

const SlideContaienr = ({ children, classes }) => (
  <Grid container>
    <Grid item xs>
      <Paper elevation={4} className={classes.paper}>
        {children}
      </Paper>
    </Grid>
  </Grid>
);

export default withStyles(styles)(SlideContaienr);
