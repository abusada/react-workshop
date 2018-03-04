import React from "react";
import firebase from "firebase";
import Tweet from "../Tweet";
import Input from "../Input";
import moment from "moment";

const tweetsRef = firebase.database().ref("tweets");

class Feed extends React.Component {
  state = {
    tweets: []
  };

  componentDidMount() {
    tweetsRef.on("child_added", snapshopt => {
      this.setState(({ tweets }) => ({
        tweets: tweets
          .concat(snapshopt.val())
          .sort((prev, current) => current.timestamp - prev.timestamp)
      }));
    });
  }
  
  onTweet = tweet => {
    const { user: { uid, displayName, photoURL, email } } = this.props;
    const timestamp = new Date().getTime();
    const model =  {
      tweet,
      timestamp,
      user: {
        uid,
        email,
        photoURL,
        displayName
      }
    }
    firebase
      .database()
      .ref("tweets")
      .push(model);
  };
  render() {
    const { user } = this.props;
    const { tweets } = this.state;
    return (
      <section>
        <Input onTweet={this.onTweet} user={user} />
        {tweets.map((tweet, index) => <Tweet key={index} {...tweet} />)}
      </section>
    );
  }
}

export default Feed;
