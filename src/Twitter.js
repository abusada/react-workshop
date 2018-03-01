import React from "react";
import Input from "./Components/Input";
import Tweet from "./Components/Tweet";
import Paper from "material-ui/Paper";
import Login from "./Components/Login";

import { getCookie } from "./api/cookies";
import { LOGIN_COOKIE_NAME } from "./constatns";

export default class Twitter extends React.Component {
  constructor(props) {
    super(props);
    const cookie = getCookie(LOGIN_COOKIE_NAME);
    this.state = {
      isLoggedIn: !!cookie
    };
  }
  onSignupSuccess = data => {
    this.setState({
      isLoggedIn: true,
      user: data
    });
  };
  onTweet = tweet => {
    alert(tweet);
  };
  render() {
    const { isLoggedIn, user } = this.state;
    console.log({ isLoggedIn });
    return (
      <section style={{ padding: 20 }}>
        {!isLoggedIn && <Login onSignupSuccess={this.onSignupSuccess} />}
        {isLoggedIn && (
          <div>
            <Paper style={{ padding: 10 }} fullWidth>
              <Input onTweet={this.onTweet} user={user} />
            </Paper>
            <hr />
            <Tweet />
          </div>
        )}
      </section>
    );
  }
}
