import React, { Component } from "react";
import "./MovieDetailsContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import {
  faEdit,
  faTrash,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isLoaded: false,
      show: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: true });

    const search = this.props.location.search;
    console.log(search);
    if (search) {
      const [_, id] = search.split("=");
      const localStorageData = localStorage.getItem(`movie_${id}`);

      if (localStorageData) {
        const data = JSON.parse(localStorageData);
        this.setState({
          isLoaded: false,
          movie: data,
        });
      } else {
        const url = `https://movies-app-siit.herokuapp.com/movies/${id}`;
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            this.setState({
              isLoaded: false,
              movie: json,
            });
            localStorage.setItem(`movieID`, JSON.stringify(id));
          });
      }
    }
  }

  handleDeleteMovie = () => {
    const logInToken = Cookies.get("token");
    const movieLocalID = localStorage.getItem("movieID").replace(/["']/g, "");
    const movieDelete = `https://movies-app-siit.herokuapp.com/movies/${movieLocalID}`;
    // console.log(movieDelete);
    // console.log(logInToken);
    fetch(movieDelete, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "x-auth-token": logInToken,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    }).then(() => {
      this.props.history.push("/");
      localStorage.removeItem("id");
    });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { isLoggedIn } = this.props;
    const { movie, isLoaded } = this.state;

    return (
      <div className="movie-page-container">
        <div className="button-details-container">
          <h5 className="back-button" onClick={this.goBack}>
            <FontAwesomeIcon icon={faArrowLeft} />
            GoBack
          </h5>
        </div>
        {isLoaded ? (
          <h1></h1>
        ) : (
          <React.Fragment key={movie}>
            <div className="movie-poster-details-container">
              <div className="movie-poster">
                <img className="poster" src={movie.Poster} alt="" />
              </div>
              <div className="movie-details">
                <div className="movie-title-container">
                  <h2 className="movie-name">{movie.Title}</h2>
                </div>
                <div className="movie-genre-container">
                  <li className="movie-info">{movie.Genre}</li>
                </div>
                <div className="movie-det-container">
                  <div className="movie-year-runtime-lang-container">
                    <li className="movie-info">Year: {movie.Year}</li>
                    <li className="movie-info">Runtime: {movie.Runtime}</li>
                    <li className="movie-info">Language: {movie.Language}</li>
                  </div>
                  <div className="movie-country-rating-votes-container">
                    <ul>
                      <li className="movie-info">Country: {movie.Country}</li>
                      <li className="movie-info">
                        iMDB rating: {movie.imdbRating}
                      </li>
                      <li className="movie-info">
                        iMDB votes: {movie.imdbVotes}
                      </li>
                    </ul>
                  </div>
                </div>
                {isLoggedIn ? (
                  <div className="willseeclass">
                    <Button>
                      <Link
                        to={`/willsee?id=${movie._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>
                    </Button>
                    <Button onClick={this.showModal}>
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                    <Modal
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={this.state.show}
                      handleClose={this.hideModal}
                    >
                      <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                          DELETE
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p>maybe</p>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={this.handleDeleteMovie}>OK</Button>
                        <Button onClick={this.hideModal}>Test</Button>
                      </Modal.Footer>
                    </Modal>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default MoviePage;
