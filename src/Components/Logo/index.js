import React from "react";
import Lottie from "react-lottie";

import * as yamsaferAnimationData from "./yamsafer.json";
import * as reactAnimationData from "./react.json";
import * as hearAnimationData from "./heart.json";

const AnimatedLogo = ({
  callback,
  animationData,
  loop,
  autoplay,
  classes,
  ...rest
}) => (
  <div className={classes}>
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
  <AnimatedLogo
    classes={"logo-dark"}
    animationData={yamsaferAnimationData}
    {...props}
  />
);
export const ReactLogo = props => (
  <AnimatedLogo animationData={reactAnimationData} {...props} />
);
export const HeartLogo = props => (
  <AnimatedLogo animationData={hearAnimationData} {...props} />
);

export default AnimatedLogo;
