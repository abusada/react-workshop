import React from "react";
import Grid from "material-ui/Grid";
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
      <Grid container>
        <Grid item xs={12} sm={3} md={4} />
        <Grid item xs={12} sm={6} md={4} style={{ padding: 20}}>
          <FirebaseProvider key="app">
            <FirebaseConsumer>
              {({ user, status }) => (
                <div>
                  {animationReady &&
                    status === statusTypes.IS_AUTHORIZED && (
                      <Feed user={user} />
                    )}

                  {status === statusTypes.IS_PENDING ||
                    (animationReady === false && (
                      <LoadingScreen
                        onAnimationComplete={
                          this.onLoadingScreenAnimationComplete
                        }
                      />
                    ))}

                  {animationReady &&
                    status === statusTypes.IS_NOT_AUTHORIZED && <LoginScreen />}
                </div>
              )}
            </FirebaseConsumer>
          </FirebaseProvider>
        </Grid>
      </Grid>
    );
  }
}
