import React from "react";
import Lottie from "react-lottie";
import * as animationData from "./lottie.json";

const AnimatedLogo = () => (
  <div className="logo-dark">
    <Lottie
      options={{
        loop: false,
        autoplay: true,
        animationData: animationData
      }}
      height={160}
    />
  </div>
);

export default AnimatedLogo;
