import React from "react";
import "../../App.css";
import WelcomeBanner from "../WelcomeBanner";
import AddMovie from "./AddMovieFunctionality";

export default function AddMovies() {
  return (
    <>
      <WelcomeBanner />
      <h1 className="add-movies">ADD</h1>
      <AddMovie />
    </>
  );
}
