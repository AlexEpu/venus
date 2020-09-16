import React from "react";
import "../../App.css";
import WelcomeBanner from "../WelcomeBanner";
import AllMovies from "../AllMovies";
import Pagination from "../AllMoviesPagination";

export default function Movies() {
  return (
    <>
      <WelcomeBanner />
      <AllMovies />
      <h1 className="movies"></h1>
      <Pagination
        
      />
    </>
  );
}
