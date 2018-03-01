import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase";

import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Modal from "material-ui/Modal";

import Button from "material-ui/Button";
import Paper from "material-ui/Paper";
import Form from "./Form";
import { setCookie } from "../../api/cookies";
import { LOGIN_COOKIE_NAME } from "../../constatns";

function getModalStyle() {
  const top = 0;
  const left = 0;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

class SimpleModal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onFormSubmit = (e, data) => {
    if (data.name) {
      setCookie(LOGIN_COOKIE_NAME, data.name);
      this.props.onSignupSuccess(data);
    }
  };

  login = () => {
    const { onSignupSuccess, onSignupFailure, firebase } = this.props;
    var provider = new firebase.auth.GoogleAuthProvider();
    console.log("firebase", firebase);
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(onSignupSuccess)
      .catch(onSignupFailure);
  };
  render() {
    const { status } = this.props;

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

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleModal);
