import React from "react";
import "../../App.css";
import WelcomeBanner from "../WelcomeBanner";
import  Search  from "./Search";


export default function MovieSearch() {
  return (
    <>
      {/* <WelcomeBanner /> */}
      <h1 className="movie-search"></h1>
      <Search />
    </>
  );
}
