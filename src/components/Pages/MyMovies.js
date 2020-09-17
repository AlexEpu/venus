import React, { Component } from "react";
import "../../App.css";
import { generateUrl } from "./SearchFunction/UrlSearch";
import { fetchMovies } from "./SearchFunction/FetchMovies.js";
import Country from "./SearchFunction/CountryFilter";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Genre: null,
      Language: null,
      Country: null,
      data: null,
      input: "",
      runtime: 0,
      Year: "",
      type: "",
      imdbRating: 0,
      inputValue: "",
      isLoaded: false,
      loading: false,
      movies: [],
      error: "",
      filters: {
        Title: "",
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
        runtime: 0,
        Year: "",
        data: null,
        type: "",
        imdbRating: 0,
        inputValue: "",
        isLoaded: false,
        loading: false,
        movies: [],
        error: "",
        filters: {
          Title: "",
          Genre: "",
          Year: "",
          Language: "",
          Country: "",
          Runtime: "",
          imdbRating: "",
        },
      },
      () => {
        const url = generateUrl(this.state.filters);
        fetchMovies(url)
          .then((response) => {
            if (!response.ok) {
              throw response;
            }
            return response.json(); //we only get here if there is no error
          })
          .then((json) => {
            this.setState({ isLoaded: true, movies: json.results });
          });
      }
    );
  };

  choicesUpdated = (filterTitle, value) => {
    this.setState(
      (prevState) => {
        let { filters } = prevState;
        filters[filterTitle] = value;
        console.log(filters);
        return { filters };
      },
      () => {
        let url = generateUrl(this.state.filters);
        console.log(url);
        fetchMovies(url).then((json) => {
          this.setState({ isLoaded: true, movies: json.results });
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

  componentDidMount() {
    fetchMovies().then((json) => {
      this.setState({ isLoaded: true, movies: json.results });
    });
  }

  render() {
    return (
      <div>
        <input
          placeholder="Search.."
          className="searchinput"
          type="text"
          value={this.state.input}
          SearchFilter={this.handleOnSearchChange}
          updateValue={this.handleSearch}
          onChange={this.handleOnChange}
        />
        <Country
          handleCountryChange={this.handleCountryChange}
          Country={this.state.Country}
        />

        {this.state.data ? (
          <div>
            {this.state.data.map((item, index) => (
              <img key={index} src={item.Poster} />
            ))}
          </div>
        ) : (
          <div>
            {this.state.movies ? (
              <div>
                {this.state.movies.map((item) => (
                  <img className="posters" src={item.Poster} />
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        )}
        <div></div>
      </div>
    );
  }
}

export default Search;
