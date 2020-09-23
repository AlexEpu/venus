import React from "react";
import "../../App.css";
import WelcomeBanner from "../WelcomeBanner";
import AllMovies from "../AllMoviesContent";
import Pagination from "../AllMoviesPagination";
import AddMovie from "./AddMovieFunctionality"

export default function Movies() {
  
  return (
    <>
      <WelcomeBanner />
      
      <h1 className="movies"></h1>
     <AllMovies/>
    </>
  );
}
