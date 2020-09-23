import React from 'react';
import './JoinUsBannerHome.css'
import { Button } from "./Button";


function JoinUsBannerHome() {
    if(!localStorage.getItem("accessToken"))
    return (

      <div className="join-us-main">
        <div className="join-us-main-container">
          <div className="text-container">
            <div className="text-container-wrap-text">
              <h1 className="join-us-main-container-text">JOIN-US</h1>
            </div>
            <div className="text-container-wrap-text1">
              <h1 className="join-us-main-container-text1">AND</h1>
            </div>
            <div className="text-container-wrap-text2">
              <h1 className="join-us-main-container-text2">BE</h1>
            </div>
            <div className="text-container-wrap-text3">
              <h1 className="join-us-main-container-text3">AMAZED</h1>
            </div>
          </div>
         
            
            <div className="button-container">
              <Button />
            </div>
         
        </div>
      </div>
    );
    else return( <div className="join-us-main">
    <div className="join-us-main-container">
      <div className="text-container">
        <div className="text-container-wrap-text">
          <h1 className="join-us-main-container-text">GET READY</h1>
        </div>
        <div className="text-container-wrap-text1">
          <h1 className="join-us-main-container-text1">AND</h1>
        </div>
        <div className="text-container-wrap-text2">
          <h1 className="join-us-main-container-text2">START</h1>
        </div>
        <div className="text-container-wrap-text3">
          <h1 className="join-us-main-container-text3">SEARCHING!</h1>
        </div>
      </div>
    </div>
  </div>)
}

export default JoinUsBannerHome;