import React, { createContext, Component } from "react";
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyB9J9uZRl1g1fRTFzm0DDQsDPyu90w3cLU",
  authDomain: "react-workshop-3eb10.firebaseapp.com",
  databaseURL: "https://react-workshop-3eb10.firebaseio.com",
  projectId: "react-workshop-3eb10",
  storageBucket: "react-workshop-3eb10.appspot.com",
  messagingSenderId: "24400712690"
});

const FirebaseContext = createContext("firebase");

export const statusTypes = {
  IS_PENDING: "pending",
  IS_AUTHORIZED: "authorized",
  IS_NOT_AUTHORIZED: "not-authorized"
};

export class FirebaseProvider extends Component {
  state = {
    user: null,
    status: statusTypes.IS_PENDING
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user,
        status: user ? statusTypes.IS_AUTHORIZED : statusTypes.IS_NOT_AUTHORIZED
      });
    });
  }
  render() {
    return (
      <FirebaseContext.Provider  value={this.state}>
        {this.props.children}
      </FirebaseContext.Provider>
    );
  }
}

export const FirebaseConsumer = FirebaseContext.Consumer;
