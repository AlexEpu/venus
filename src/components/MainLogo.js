import React from "react";
import food from "./../images/main-logo.png";

import "./MainLogo.css";

export function MainLogo() {
  return <img src={food} alt="logo" className="main-logo" />;
}
