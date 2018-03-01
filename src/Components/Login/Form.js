import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Grid from "material-ui/Grid";
import { FormControl, FormLabel, FormControlLabel } from "material-ui/Form";
import Radio, { RadioGroup } from "material-ui/Radio";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";

const styles = theme => ({
  root: {
    flexGrow: 1,
    border: "1px solid red"
  },
  demo: {
    height: "100vh"
  },
  paper: {
    padding: 20
    // minWidth: '50vw',
    // minHeight: '50vh',
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});

class InteractiveGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ name: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(e, this.state);
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid
            container
            className={classes.demo}
            alignItems={"center"}
            direction={"column"}
            justify={"center"}
          >
            <Paper className={classes.paper}>
              <form onSubmit={this.onSubmit} noValidate autoComplete="off">
                <TextField
                  id="name"
                  label="What's your name"
                  value={this.state.name}
                  onChange={this.onChange}
                  margin="normal"
                />
              </form>
            </Paper>
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
