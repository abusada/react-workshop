import React from "react";
import { FirebaseProvider } from "./Components/Firebase";
import Feed from "./Components/Feed";
import LoginScreen from "./Components/Login";
import LoadingScreen from "./Components/LoadingScreen";
import { FirebaseConsumer, statusTypes } from "./Components/Firebase";

export default class Twitter extends React.Component {
  state = {
    animationReady: false
  };
  onLoadingScreenAnimationComplete = () => {
    this.setState({
      animationReady: true
    });
  };
  render() {
    const { animationReady } = this.state;
    return (
      <FirebaseProvider key="app">
        <FirebaseConsumer>
          {({ user, status }) => (
            <div>
              {animationReady &&
                status === statusTypes.IS_AUTHORIZED && <Feed user={user} />}

              {status === statusTypes.IS_PENDING ||
                (animationReady === false && (
                  <LoadingScreen
                    onAnimationComplete={this.onLoadingScreenAnimationComplete}
                  />
                ))}

              {animationReady &&
                status === statusTypes.IS_NOT_AUTHORIZED && <LoginScreen />}
            </div>
          )}
        </FirebaseConsumer>
      </FirebaseProvider>
    );
  }
}
