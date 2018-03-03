import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import { YamsaferLogo } from "../Logo";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  demo: {
    height: "100vh"
  }
});

class InteractiveGrid extends React.Component {
  render() {
    const { classes, onAnimationComplete } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            alignItems={"center"}
            justify={"center"}
          >
            <Grid item>
              <YamsaferLogo callback={onAnimationComplete} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

InteractiveGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InteractiveGrid);
