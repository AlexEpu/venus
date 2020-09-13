import React from 'react';
import './JoinUsBannerHome.css'
import { Button } from "./Button";


function JoinUsBannerHome() {
    return (
      <div className="join-us-main">
        <div className="join-us-main-container">
          <h1 className="join-us-main-container-text">           JOIN-US</h1>
          <h1 className="join-us-main-container-text1">                          AND</h1>
          <h1 className="join-us-main-container-text2">                  BE</h1>
          <h1 className="join-us-main-container-text3">         AMAZED</h1>
        </div>
        <Button/>
      </div>
    );
}

export default JoinUsBannerHome;