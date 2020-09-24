import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";
import "./AddMovieFunctionality.css";
import Button from '../Button'

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Title: "",
      Year: "",
      Genre: "",
      Poster: "",
      Country: "",
      Plot:"",
      Language: "",
      Runtime: "",
      ImdbVotes: "",
      ImdbRating: "",
      imdbID: "",
      Type: "",
      Error: "",
      isLoaded: false,
    };
  }

  submitMovie = (event) => {
    event.preventDefault();

    let data = {
      Title: this.state.Title,
      Country: this.state.Country,
      Year: this.state.Year,
      Genre: this.state.Genre,
      Plot:this.state.Plot,
      Language: this.state.Language,
      Runtime: this.state.Runtime,
      ImdbVotes: this.state.ImdbVotes,
      ImdbRating: this.state.ImdbRating,
      Poster: this.state.Poster,
      imdbID: this.state.imdbID,
      Type: this.state.Type,
      isLoaded: this.state.isLoaded,
    };
    console.log(this.state);

    this.addMovie(data);
    this.setState({
      Title: "",
      Year: "",
      Genre: "",
      Poster: "",
      Country: "",
      Plot:"",
      Language: "",
      Runtime: "",
      ImdbVotes: "",
      ImdbRating: "",
      imdbID: "",
      Type: "",
      isLoaded: false,
    });
  };

  validateInputs = () => {
    let Error = "";

    if (!this.state.Title) {
      Error = "Input cannot be blank";
    }

    if (!this.state.Plot) {
      Error = "Input cannot be blank";
    }

    if (!this.state.Year) {
      Error = "Input cannot be blank";
    }

    if (!this.state.Genre) {
      Error = "Input cannot be blank";
    }

    if (!this.state.Poster) {
      Error = "Input cannot be blank";
    }

    if (!this.state.Country) {
      Error = "Input cannot be blank";
    }

    if (!this.state.Language) {
      Error = "Input cannot be blank";
    }

    if (!this.state.Runtime) {
      Error = "Input cannot be blank";
    }

    if (!this.state.ImdbVotes) {
      Error = "Input cannot be blank";
    }

    if (!this.state.ImdbRating) {
      Error = "Input cannot be blank";
    }

    if (!this.state.imdbID) {
      Error = "Input cannot be blank";
    }

    if (!this.state.imdbID) {
      Error = "Input cannot be blank";
    }

    if (Error) {
      this.setState({ Error });
      return false;
    }
    return true;
  };

  addMovie = (data) => {
    const token = localStorage.getItem("accessToken");
    const valid = this.validateInputs();

    if (valid) {
      fetch(`https://movies-app-siit.herokuapp.com/movies`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": token,
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          if (!this.state.Error) this.setState({ isLoaded: true });
          this.setState({Error:""})
          console.log(this.state.isLoaded);
        });
    }
  };

  changeSubmissions = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
    console.log(event.target.value);
    console.log(event.target.name);
  };

  render() {
      return (
        <div className="form-container">
          <div className="AddForm edit-add-form add-form-add">
            <div id="form form-add-page">
              <form onSubmit={this.submitMovie}>
                <h3 className="addMovieTitle">Add Movie</h3>
                {/* <label className="addMovieTitle">Movie Title</label> */}
                <input type="text" className="input-class input-class-add"
                  value={this.state.Title}
                  placeholder="Enter Movie Title"
                  name="Title"
                  onChange={(event) => this.changeSubmissions(event)}
                />
                <div>
                  <h6 className="validateInput">{this.state.Error} </h6>
                </div>
                {/* <label className="addYear">Year</label> */}
                <input
                  value={this.state.Year}
                  className="input-class"
                  type="number"
                  placeholder="Enter a Year"
                  name="Year"
                  onChange={this.changeSubmissions}
                ></input>
                <div>
                  <h6 className="validateInput">{this.state.Error} </h6>
                </div>
                {/* <label className="addCountry">Country</label> */}
                <input
                  value={this.state.Country}
                  type="text"
                  className="input-class"
                  placeholder="Enter a Country"
                  name="Country"
                  onChange={this.changeSubmissions}
                ></input>
                <div>
                  <h6 className="validateInput">{this.state.Error} </h6>
                </div>
                {/* <label className="addGenre">Genre</label> */}
                <input
                  value={this.state.Genre}
                  type="text"
                  className="input-class"
                  placeholder="Enter a Genre"
                  name="Genre"
                  onChange={this.changeSubmissions}
                ></input>
                <div>
                  <h6 className="validateInput">{this.state.Error} </h6>
                </div>
                {/* <label className="addLanguage">Year</label> */}
                <input
                  value={this.state.Language}
                  type="text"
                  className="input-class"
                  placeholder="Enter Language"
                  name="Language"
                  onChange={this.changeSubmissions}
                ></input>
                <div>
                  <h6 className="validateInput">{this.state.Error} </h6>
                </div>
                {/* <label className="addRuntime">Runtime</label> */}
                <input
                  value={this.state.Runtime}
                  type="text"
                  className="input-class"
                  placeholder="Enter Movie Runtime"
                  name="Runtime"
                  onChange={this.changeSubmissions}
                ></input>
                <div>
                  <h6 className="validateInput">{this.state.Error} </h6>
                </div>
                {/* <label className="addImdbVotes">IMDB votes</label> */}
                <input
                  value={this.state.ImdbVotes}
                  type="number"
                  className="input-class"
                  placeholder="Enter IMDB vote"
                  name="ImdbVotes"
                  onChange={this.changeSubmissions}
                ></input>
                <div>
                  <h6 className="validateInput">{this.state.Error} </h6>
                </div>
                {/* <label className="addImdbRating">IMDB Rating</label> */}
                <input
                  value={this.state.ImdbRating}
                  type="number"
                  className="input-class"
                  placeholder="Enter IMDB rating"
                  name="ImdbRating"
                  onChange={this.changeSubmissions}
                ></input>
                <div>
                  <h6 className="validateInput">{this.state.Error} </h6>
                </div>
                {/* <label className="addID">IMDB ID</label> */}
                <input
                  value={this.state.imdbID}
                  type="text"
                  className="input-class"
                  placeholder="Enter IMDB ID"
                  name="imdbID"
                  onChange={this.changeSubmissions}
                ></input>
                <div>
                  <h6 className="validateInput">{this.state.Error} </h6>
                </div>
                <input
                  type="text"
                  value={this.state.Plot}
                  placeholder="Enter Plot"
                  name="Plot"
                  className="input-class"
                  onChange={this.changeSubmissions}
                ></input>
                <div>
                  <h6 className="validateInput">{this.state.Error} </h6>
                </div>
                {/* <label className="addPoster">Poster</label> */}
                <input
                  value={this.state.Poster}
                  type="text"
                  className="input-class"
                  placeholder="Enter Poster URL"
                  name="Poster"
                  onChange={this.changeSubmissions}
                ></input>
                <div>
                  <h6 className="validateInput">{this.state.Error} </h6>
                </div>
                <label value={this.state.Type} className="addType">
                  
                </label>
                <input
                  type="text"
                  value={this.state.Type}
                  placeholder="Enter Type"
                  name="Type"
                  className="input-class"
                  onChange={this.changeSubmissions}
                ></input>
               
                <div className="addMovieButton">
                  <div>
                    <h6 className="validateInput">{this.state.Error} </h6>
                  </div>
                  <button className="add-movie-btn">Add Movie</button>
                </div>
                {this.state.isLoaded ? (
                  <div className="isloaded">
                    <h3>Movie successfully added!</h3>
                  </div>
                ) : (
                  ""
                )}
              </form>
            </div>
          </div>
        </div>
      );
  }
}

export default AddMovie;
