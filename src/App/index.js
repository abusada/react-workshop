import React from "react";
import Grid from "material-ui/Grid";
import { FirebaseProvider } from "./Firebase";
import Feed from "./Feed";
import LoginScreen from "./Login";
import LoadingScreen from "./LoadingScreen";
import { FirebaseConsumer, statusTypes } from "./Firebase";

export default class App extends React.Component {
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
