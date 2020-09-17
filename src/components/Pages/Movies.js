import React from "react";
import "../../App.css";
import WelcomeBanner from "../WelcomeBanner";
import AllMovies from "../AllMoviesContent";

export default function Movies() {
  return (
    <>
      <WelcomeBanner />
      
      <h1 className="movies"></h1>
     <AllMovies/>
    </>
  );
}
