import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import firebase from 'firebase';

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

class LoginScreen extends React.Component {
  login = () => {
    // const { onSignupSuccess, onSignupFailure } = this.props;
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      // .then(onSignupSuccess)
      // .catch(onSignupFailure);
  };
  render() {
    return (
      <Paper style={{ textAlign: "center", padding: 20 }}>
        <Typography variant="headline" component="h3">
          You need to login
        </Typography>
        <Button color="white" variant="raised" onClick={this.login}>
          Login with Google
        </Button>
      </Paper>
    );
  }
}

LoginScreen.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginScreen);
