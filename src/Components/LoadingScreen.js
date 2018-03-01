import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import { FormControl, FormLabel, FormControlLabel } from "material-ui/Form";
import Radio, { RadioGroup } from "material-ui/Radio";
import Paper from "material-ui/Paper";
import { CircularProgress } from "material-ui/Progress";
import Logo from './Logo';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  demo: {
    height: "100vh"
  }
});

class InteractiveGrid extends React.Component {
  state = {
    direction: "row",
    justify: "center",
    alignItems: "center"
  };
  render() {
    const { classes, onAnimationComplete } = this.props;
    const { alignItems, direction, justify } = this.state;
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
                <Logo callback={onAnimationComplete} />
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
