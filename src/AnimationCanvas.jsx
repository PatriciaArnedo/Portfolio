import React from "react";
import "./style.css";
import animation from "./animation.js";

const AnimationCanvas = () => {
  return (
    <>
      <canvas id="bg"></canvas>
      {animation}
    </>
  );
};

export default AnimationCanvas;
