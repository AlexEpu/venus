import React, {useEffect} from "react";
import "./CreatorsBannerTitle.css";
import Aos from "aos";
import "aos/dist/aos.css";

function CreatorsBannerTitle() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  

  return (
    <div data-aos="fade-up" className="creators-banner-main">
      <div className="text-container">
        <h1 data-aos="zoom-in" className="banner-text">
          CREATORS
        </h1>
      </div>
      <div data-aos="zoom-in" className="star-container">
        <i className="fas fa-star fa-2x"></i>
        <div data-aos="fade-right" className="line-left"></div>
        <div data-aos="fade-left" className="line-right"></div>
      </div>
    </div>
  );
}

export default CreatorsBannerTitle;
