import React from "react";
import Grid from "material-ui/Grid";
import firebase from "firebase";
import Tweet from "./Components/Tweet";
import Input from "./Components/Input";

var database = firebase.database();

export default class Training extends React.Component {
  state = {
    tweets: []
  };
  componentDidMount() {
    const tweetsRef = firebase.database().ref("tweets");
    tweetsRef.on("child_added", snapshot => {
      this.setState(({ tweets }) => ({
        tweets: tweets.concat(snapshot.val())
      }));
    });
  }
  onTweet = tweet => {
    const timestamp = new Date().getTime();

    const model = {
      tweet,
      timestamp,
      user: {
        uid: 0,
        email: "email@bzy.edu",
        photoURL:
          "https://lh3.googleusercontent.com/-JmUb9YMSjfY/AAAAAAAAAAI/AAAAAAAAABA/6ObgLwbcvo8/photo.jpg",
        displayName: "Mohammad Mousa"
      }
    };

    firebase
      .database()
      .ref("tweets")
      .push(model);
  };
  render() {
    const { tweets } = this.state;
    return (
      <Grid container>
        <Grid item xs={12} sm={4} md={3} />
        <Grid item xs={12} sm={4} md={6}>
          <div style={{ padding: 20 }}>
            <Input
              onTweet={this.onTweet}
              placeholder={" Placeholder coming from the outside "}
            />
            <hr />

            {tweets.map(item => (
              <Tweet user={item.user} timestamp={item.timestamp} text={item.tweet} />
            ))}

          </div>
        </Grid>
      </Grid>
    );
  }
}
