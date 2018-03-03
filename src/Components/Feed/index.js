import React from "react";
import firebase from "firebase";
import Tweet from "../Tweet";
import Input from "../Input";

const tweetsRef = firebase.database().ref("tweets");

class Feed extends React.Component {
  state = {
    tweets: []
  };
  componentDidMount() {
    tweetsRef.orderByChild("timestamp").on("child_added", snapshopt => {
      this.setState(({ tweets }) => ({
        tweets: tweets
          .concat({
            ...snapshopt.val(),
            key: snapshopt.key
          })
          .sort((prev, next) => prev.timestamp < next.timestamp)
      }));
    });
  }
  onTweet = tweet => {
    const { user: { uid, displayName, photoURL, email } } = this.props;
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
        }
      });
  };
  render() {
    const { user } = this.props;
    const { tweets } = this.state;
    return (
      <section>
        <Input onTweet={this.onTweet} user={user} />
        {tweets.map(tweet => <Tweet {...tweet} />)}
      </section>
    );
  }
}

export default Feed;
