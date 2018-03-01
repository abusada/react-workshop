import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./lottie.json";

const AnimatedLogo = ({ callback }) => (
  <div className="logo-dark">
    <Lottie
      options={{
        loop: false,
        autoplay: true,
        animationData: animationData
      }}
      eventListeners={[
        {
          callback,
          eventName: "complete"
        }
      ]}
      height={160}
    />
  </div>
);

AnimatedLogo.defaultProps = {
  callback() {}
};

export default AnimatedLogo;
