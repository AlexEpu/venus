import React from "react";
import "./WelcomeBanner.css";

function WelcomeBanner() {
  return (
    <div className="banner-main">
      <div className="banner-container">
        <h1 className="banner-h1">WELCOME TO VENUS</h1>
        <p className="banner-paragraph">
          <i>
            -It might not be Rocket Science but we’ll try to make it look like
            it’s Out of this world-
          </i>
        </p>
      </div>
    </div>
  );
}

export default WelcomeBanner;
