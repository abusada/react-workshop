import React from "react";
import Lottie from "react-lottie";

import * as yamsaferAnimationData from "./yamsafer.json";
import * as reactAnimationData from "./react.json";
import * as hearAnimationData from "./heart.json";

const AnimatedLogo = ({ callback, animationData, loop, autoplay, ...rest }) => (
  <div className="logo-dark">
    <Lottie
      options={{
        loop,
        autoplay,
        animationData
      }}
      eventListeners={[
        {
          callback,
          eventName: "complete"
        }
      ]}
      {...rest}
    />
  </div>
);

AnimatedLogo.defaultProps = {
  callback() {},
  loop: false,
  autoplay: true,
  speed: 1,
  height: 160
};

export const YamsaferLogo = props => (
  <AnimatedLogo animationData={yamsaferAnimationData} {...props} />
);
export const ReactLogo = props => (
  <AnimatedLogo animationData={reactAnimationData} {...props} />
);
export const HeartLogo = props => (
  <AnimatedLogo animationData={hearAnimationData} {...props} />
);

export default AnimatedLogo;
