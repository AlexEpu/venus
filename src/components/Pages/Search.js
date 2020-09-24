
import Card from "react-bootstrap/Card";
import React, { Component } from "react";
import "./SearchFunction/Search.css";
import "../AllMoviesContent.css";
import { generateUrl } from "./SearchFunction/UrlSearch";
import { fetchMovies } from "./SearchFunction/FetchMovies.js";
import Country from "./SearchFunction/CountryFilter";
import Genre from "./SearchFunction/GenreFilter";
import Language from "./SearchFunction/LanguageFilter";
import ImdbRatingF from "./SearchFunction/ImdbRatingF";
import RuntimeFilter from "./SearchFunction/RuntimeFilter";
import Year from "./SearchFunction/YearFilter";
import Type from "./SearchFunction/TypeFilter";
import NoResult from "./SearchFunction/NoResult";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CarouselLoader from "../CarouselLoader"
import AllMoviesPagination from "../AllMoviesPagination"
import { useEffect } from "react";
import "aos/dist/aos.css";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Genre: null,
      Language: null,
      Country: null,
      data: null,
      input: "",
      runtimeValue: "",
      Year: "",
      Type: "",
      imdbRatingValue: "",
      inputValue: "",
      isLoaded: false,
      totalResults: 0,
      pagination: [],
      paginationLinkNext: [],
      currentPage: [],
      paginationLinkPrev: [],
      numberOfPages: [],
      selfPage: [],
      paginationSelfLinks: [],
      movies: [],
      error: "",
      filters: {
        Title: "",
        Type: "",
        Genre: "",
        Year: "",
        Language: "",
        Country: "",
        Runtime: "",
        imdbRating: "",
      },
    };
  }

  clearFilters = () => {
    this.setState(
      {
        Genre: null,
        Language: null,
        Country: null,
        input: "",
        runtimeValue: "",
        Year: "",
        data: null,
        Type: "",
        imdbRatingValue: "",
        inputValue: "",
        isLoaded: false,
        loading: false,
        movies: [],
        error: "",
        filters: {
          Title: "",
          Genre: "",
          Type: "",
          Year: "",
          Language: "",
          Country: "",
          Runtime: "",
          imdbRating: "",
        },
      },
      () => {
        const url = generateUrl(this.state.filters);
        fetchMovies(url).then((json) => {
          this.setState({ isLoaded: true, movies: json.results });
        });
      }
    );
  };

  choicesUpdated = (filterTitle, value, skip = "") => {
    this.setState(
      (prevState) => {
        let { filters } = prevState;
        filters[filterTitle] = value;
        filters[skip] = skip;
        console.log(filters);
        return { filters };
      },
      () => {
        let url = generateUrl(this.state.filters);
        console.log(url);
        fetchMovies(url).then((json) => {
          this.setState({
            isLoaded: true,
            movies: json.results,
            pagination: json.pagination,
            totalResults: json.total_Results,
            paginationLinkNext: json.pagination.links.next,
            numberOfPages: json.pagination.numberOfPages,
            currentPage: json.pagination.currentPage,
            selfPage: json.pagination.links.self,
          });
          console.log(json.results);
          /*console.log(url)*/
        });
      }
    );
  };

  handleSearch = (inputValue) => {
    this.setState({
      input: inputValue,
    });
  };

  handleGenreChange = (Genre) => {
    this.choicesUpdated("Genre", Genre.value);
    this.setState({ Genre });
  };

  handleLanguageChange = (Language) => {
    this.choicesUpdated("Language", Language.value);
    this.setState({ Language });
  };

  handleOnSearchChange = (inputValue) => {
    this.setState({ input: inputValue, loading: true });

    this.choicesUpdated("Title", inputValue);
  };

  handleCountryChange = (Country) => {
    this.choicesUpdated("Country", Country.value);
    this.setState({ Country });
  };

  handleOnChange = (event) => {
    this.choicesUpdated("Title", event.target.value);
    this.setState({
      input: event.target.value,
    });
  };

  ratingValue = (imdbRatingValue) => {
    this.setState({
      imdbRatingValue,
    });
    this.choicesUpdated("imdbRating", imdbRatingValue);
  };

  ratingChange = (changeEvent) => {
    this.choicesUpdated("imdbRating", changeEvent);
  };

  handleRuntimeChange = (runtimeValue) => {
    this.setState({
      runtimeValue,
    });
    this.choicesUpdated("Runtime", runtimeValue);
  };

  handleRuntime = (eventChange) => {
    let selectedRuntime = eventChange + " min";
    console.log(eventChange);

    this.choicesUpdated("Runtime", selectedRuntime);
  };

  handleYearChange = (event) => {
    const inputYear = event.target.value;
    this.setState({ Year: inputYear });

    this.choicesUpdated("Year", inputYear);
  };

  handleTypeChange = (Type) => {
    this.choicesUpdated("Type", Type.value);
    this.setState({ Type });
  };
  nextPage = () => {
    const Url = this.state.paginationLinkNext;
    console.log(Url);
    fetch(Url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          loading: false,
          movies: json.results,
          pagination: json.pagination,
          currentPage: json.pagination.currentPage,
          paginationLinkNext: json.pagination.links.next,
          paginationLinkPrev: json.pagination.links.prev,
          numberOfPages: json.pagination.numberOfPages,
          selfPage: json.pagination.links.self,
        });
      });
  };
  selfPage = (pageNumber) => {
    const Url =
      "https://movies-app-siit.herokuapp.com/movies?take=10&skip=" +
      (pageNumber - 1) * 10;
    console.log(Url);
    fetch(Url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          selfPage: json.pagination.links.self,
          movies: json.results,
          paginationLinkNext: json.pagination.links.next,
          paginationLinkPrev: json.pagination.links.prev,
        });
      });
  };
  PreviousPage = () => {
    const Url = this.state.paginationLinkPrev;
    fetch(Url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          loading: false,
          pagination: json.pagination,
          movies: json.results,
          currentPage: json.pagination.currentPage,
          paginationLinkNext: json.pagination.links.next,
          paginationLinkPrev: json.pagination.links.prev,
          numberOfPages: json.pagination.numberOfPages,
          selfPage: json.pagination.links.self,
        });
      });
  };

  componentDidMount() {
    const AOS = require("aos");
    this.aos = AOS;
    this.aos.init({ duration: 1000 });
    fetchMovies().then((json) => {
      this.setState({
        isLoaded: true,
        movies: json.results,
        pagination: json.pagination,
        totalResults: json.total_Results,
        paginationLinkNext: json.pagination.links.next,
        numberOfPages: json.pagination.numberOfPages,
        currentPage: json.pagination.currentPage,
        selfPage: json.pagination.links.self,
      });
    });
  }

  componentDidUpdate() {
    this.aos.refresh();
  }

  render() {
    const { isLoaded } = this.state;
    const { allPagesCount } = this.state;

    if (!isLoaded) {
      return (
        <div className="loader">
          <CarouselLoader />
        </div>
      );
    } else {
      return (
        <div className="search-page">
          <div className="search-input-wrapper">
            <input
              placeholder="   Search.."
              className="searchinput"
              type="text"
              value={this.state.input}
              SearchFilter={this.handleOnSearchChange}
              updateValue={this.handleSearch}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="search-container-wrapper">
            <div className="search-container">
              <div className="enterboxes ">
                <RuntimeFilter
                  handleRuntime={this.handleRuntime}
                  runtimeValue={this.state.runtimeValue}
                  handleRuntimeChange={this.handleRuntimeChange}
                />
                <ImdbRatingF
                  ratingChange={this.ratingChange}
                  imdbRatingValue={this.state.imdbRatingValue}
                  ratingValue={this.ratingValue}
                />
                <Year
                  handleYearChange={this.handleYearChange}
                  Year={this.state.Year}
                />
                <div className="dropdown">
                  <Country
                    handleCountryChange={this.handleCountryChange}
                    Country={this.state.Country}
                  />
                  <Genre
                    handleGenreChange={this.handleGenreChange}
                    Genre={this.state.Genre}
                  />
                  <Type
                    handleTypeChange={this.handleTypeChange}
                    Type={this.state.Type}
                  />
                  <Language
                    handleLanguageChange={this.handleLanguageChange}
                    Language={this.state.Language}
                  />
                  <div className="button-reset">
                    <Button
                      className="btn"
                      variant="contained"
                      color="primary"
                      content="span"
                      className="btn-reset"
                      onClick={this.clearFilters}
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {this.state.movies ? (
            <div className={"movie-card-main-container-2"}>
              <div className="movie-card-container">
                {this.state.movies
                  .filter((image) => image.Poster && image.Poster !== "N/A")
                  .map((image, index) => (
                    <Link to={`/movie-details?id=${image._id}`} key={index}>
                      <div>
                        <div
                          data-aos="zoom-in"
                          className="movie-poster-details"
                        >
                          <>
                            <Card>
                              <Card.Img
                                className="movie-poster"
                                top
                                variant="top"
                                src={image.Poster}
                              />
                              <Card.Body>
                                <Card.Title className="movie-title">
                                  {image.Title}
                                </Card.Title>
                                <Card.Text className="movie-title-text">
                                  <li>Genre: {image.Genre}</li>
                                  <li>Rating: {image.imdbRating}</li>
                                  <li>Year: {image.Year}</li>
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          ) : (
            <div>
              <h3> No results found.</h3>
            </div>
          )}
          <div data-aos="zoom-in">
            <AllMoviesPagination
              movieData={this.state.movieData}
              pagination={this.state.pagination}
              nextPage={this.nextPage}
              prevPage={this.PreviousPage}
              currentPage={this.state.currentPage}
              numberOfPages={this.state.numberOfPages}
              selfPage={this.selfPage}
            />
          </div>
        </div>
      );
    }
  }
}

export default Search;
