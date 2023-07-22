import React from "react";
import "./styles.css";
import background from "../../Assets/Background.png";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img src={background} alt="Loading Background" className="bg-image" />
      <h2 id="load-text">Loading</h2>
    </div>
  );
};

export default LoadingScreen;
