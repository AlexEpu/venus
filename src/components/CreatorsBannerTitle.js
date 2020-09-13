import React from "react";
import "./CreatorsBannerTitle.css";

function CreatorsBannerTitle() {
  return (
    <div className="creators-banner-main">
      <div className="text-container">
        <h1 className="banner-text">CREATORS</h1>
      </div>
      <div className="star-container">
        <i className="fas fa-star fa-2x"></i>
        <div className="line-left"></div>
        <div className="line-right"></div>
      </div>
    </div>
  );
}

export default CreatorsBannerTitle;
