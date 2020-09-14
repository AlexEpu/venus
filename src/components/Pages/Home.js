import React from "react";
import "../../App.css";
import WelcomeBanner from "../WelcomeBanner";
import Carousell from '../Carousell'
import CreatorsBannerTitle from "../CreatorsBannerTitle";
import CreatorsBanner from "../CreatorsBanner";
import JoinUsBannerHome from "../JoinUsBannerHome";

export default function Home() {
  return (
    <>
      <WelcomeBanner />
      <Carousell />
      <h1 className="home"></h1>
      <CreatorsBannerTitle />
      <CreatorsBanner />
      <JoinUsBannerHome />
    </>
  );
}
