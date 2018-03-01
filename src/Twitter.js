import React from "react";
import Input from "./Components/Input";
import Tweet from "./Components/Tweet";
import Paper from "material-ui/Paper";
import Login from "./Components/Login";
import LoadingScreen from "./Components/LoadingScreen";

import firebase from "firebase";
import { getCookie, setCookie } from "./api/cookies";
import { LOGIN_COOKIE_NAME } from "./constatns";

firebase.initializeApp({
  apiKey: "AIzaSyB9J9uZRl1g1fRTFzm0DDQsDPyu90w3cLU",
  authDomain: "react-workshop-3eb10.firebaseapp.com",
  databaseURL: "https://react-workshop-3eb10.firebaseio.com",
  projectId: "react-workshop-3eb10",
  storageBucket: "react-workshop-3eb10.appspot.com",
  messagingSenderId: "24400712690"
});

var database = firebase.database();
const tweetsRef = firebase.database().ref("tweets");
export default class Twitter extends React.Component {
  constructor(props) {
    super(props);
    const cookie = getCookie(LOGIN_COOKIE_NAME);
    this.state = {
      tweets: [],
      status: "pending",
      animationCompleted: false
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      user
        ? this.setState({
            user,
            status: "success"
          })
        : this.setState({
            status: "failed"
          });
    });

    tweetsRef.on("child_added", data => {
      this.setState(({ tweets }) => ({
        tweets: tweets.concat(data.val())
      }));
    });
  }
  onSignupFailure = error => {};
  onSignupSuccess = result => {
    const { credential: { accessToken }, user } = result;
    this.setState({ user }, () => {
      setCookie(LOGIN_COOKIE_NAME, accessToken);
    });
  };
  onTweet = tweet => {
    const { user: { uid, displayName, photoURL, email } } = this.state;
    
    console.log(this.state.user);

    const timestamp = new Date().getTime();
    firebase
      .database()
      .ref("tweets")
      .push({
        tweet,
        timestamp,
        user: {
          uid,
          email,
          photoURL,
          displayName
        },
      });
  };
  onLoadingScreenAnimationComplete = () => {
    this.setState({
      animationCompleted: true
    });
  };
  render() {
    const { status, user, animationCompleted } = this.state;
    if (status === "pending" || !animationCompleted) {
      return (
        <LoadingScreen
          onAnimationComplete={this.onLoadingScreenAnimationComplete}
        />
      );
    }

    return (
      <section style={{ padding: 20 }}>
        {status === "failed" && (
          <Login
            status={status}
            firebase={firebase}
            onSignupSuccess={this.onSignupSuccess}
            onSignupFailure={this.onSignupFailure}
          />
        )}
        {status === "success" && (
          <div>
            <Input onTweet={this.onTweet} user={user} />
            <hr />
            {this.state.tweets.map(tweet => <Tweet {...tweet} />)}
          </div>
        )}
      </section>
    );
  }
}
