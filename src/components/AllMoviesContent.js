import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./AllMoviesContent.css";
import AllMoviesPagination from "./AllMoviesPagination";
import CarouselLoader from "./CarouselLoader"

export class AllMovies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieData: [],
      loading: false,
      index: [],
      totalResults: 0,
      pagination: [],
      paginationLinkNext: [],
      currentPage: [],
      paginationLinkPrev: [],
      numberOfPages: [],
      selfPage: [],
      paginationSelfLinks: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(`https://movies-app-siit.herokuapp.com/movies`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          pagination: json.pagination,
          loading: false,
          movieData: json.results,
          totalResults: json.total_Results,
          paginationLinkNext: json.pagination.links.next,
          numberOfPages: json.pagination.numberOfPages,
          currentPage: json.pagination.currentPage,
          selfPage: json.pagination.links.self,
        });
      });
  }

  nextPage = () => {
    const Url = this.state.paginationLinkNext;
    console.log(Url);
    fetch(Url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          loading: false,
          movieData: json.results,
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
    const Url = 'https://movies-app-siit.herokuapp.com/movies?take=10&skip=' + (pageNumber - 1) * 10;
    console.log(Url);
    fetch(Url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          selfPage: json.pagination.links.self,
          movieData: json.results,
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
          movieData: json.results,
          currentPage: json.pagination.currentPage,
          paginationLinkNext: json.pagination.links.next,
          paginationLinkPrev: json.pagination.links.prev,
          numberOfPages: json.pagination.numberOfPages,
          selfPage: json.pagination.links.self,
        });
      });
  };

  render() {
    // const { isLoaded } = this.state;

    // if (!isLoaded) {
    //   return (
    //     <div className="loader">
    //       <CarouselLoader />
    //     </div>
    //   );
    // } else {
      return (
    
        <div className={"movie-card-main-container"}>
          <div className="movie-card-container">
            {this.state.movieData.map((movie, index) => (
              <Link to={`/movie-details?id=${movie._id}`} key={index}>
                <div>
                  <div className="movie-poster-details">
                    <>
                      <Card>
                        <Card.Img
                          className="movie-poster"
                          top
                          variant="top"
                          src={movie.Poster}
                        />
                        <Card.Body>
                          <Card.Title className="movie-title">
                            {movie.Title}
                          </Card.Title>
                          <Card.Text className="movie-title-text">
                            <li>Genre: {movie.Genre}</li>
                            <li>Rating: {movie.imdbRating}</li>
                            <li>Year: {movie.Year}</li>
                          
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="pag-container">
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

export default AllMovies;
