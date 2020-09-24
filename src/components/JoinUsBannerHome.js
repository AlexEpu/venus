import './JoinUsBannerHome.css'
import { Button } from "./Button";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


function JoinUsBannerHome() {

useEffect(() => {
  Aos.init({ duration: 1000 });
}, []);

    if(!localStorage.getItem("accessToken"))
    return (
      <div className="join-us-main">
        <div
          data-aos-duration="1000"
          data-aos="fade-up"
          className="join-us-main-container"
        >
          <div className="text-container">
            <div className="text-container-wrap-text">
              <h1
                data-aos-duration="1200"
                data-aos="fade-right"
                className="join-us-main-container-text"
              >
                JOIN-US
              </h1>
            </div>
            <div className="text-container-wrap-text1">
              <h1 data-aos="fade-up" className="join-us-main-container-text1">
                AND
              </h1>
            </div>
            <div className="text-container-wrap-text2">
              <h1 data-aos="zoom-in" className="join-us-main-container-text2">
                BE
              </h1>
            </div>
            <div className="text-container-wrap-text3">
              <h1 data-aos="fade-left" className="join-us-main-container-text3">
                AMAZED
              </h1>
            </div>
          </div>

          <div data-aos="fade-up" className="button-container">
            <Button />
          </div>
        </div>
      </div>
    );
    else return (
      <div className="join-us-main">
        <div data-aos="fade-up" className="join-us-main-container">
          <div className="text-container">
            <div className="text-container-wrap-text">
              <h1 data-aos="fade-right" className="join-us-main-container-text">
                GET READY
              </h1>
            </div>
            <div data-aos="fade-up" className="text-container-wrap-text1">
              <h1 className="join-us-main-container-text1">AND</h1>
            </div>
            <div data-aos="zoom-in" className="text-container-wrap-text2">
              <h1 className="join-us-main-container-text2">START</h1>
            </div>
            <div data-aos="fade-left" className="text-container-wrap-text3">
              <h1 className="join-us-main-container-text3">SEARCHING!</h1>
            </div>
          </div>
        </div>
      </div>
    );
}

export default JoinUsBannerHome;