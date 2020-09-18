import React, { Component } from "react";
import "../../App.css";
import "./SearchFunction/Search.css"
import { generateUrl } from "./SearchFunction/UrlSearch";
import { fetchMovies } from "./SearchFunction/FetchMovies.js";
import Country from "./SearchFunction/CountryFilter";
import Genre from "./SearchFunction/GenreFilter";
import Language from "./SearchFunction/LanguageFilter"
import ImdbRatingF from "./SearchFunction/ImdbRatingF"
import RuntimeFilter from"./SearchFunction/RuntimeFilter"
import Year from "./SearchFunction/YearFilter"
import Type from "./SearchFunction/TypeFilter"
import MovieBox from "./SearchFunction/MoviePage"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Genre: null,
      Language: null,
      Country: null,
      data: null,
      input: "",
      runtimeValue: 0,
      Year: "",
      Type: "",
      imdbRatingValue: 0,
      inputValue: "",
      isLoaded: false,
      loading: false,
      movies: [],
      error: "",
      filters: {
        Title: "",
        Type:"",
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
        runtimeValue: 0,
        Year: "",
        data: null,
        Type: "",
        imdbRatingValue: 0,
        inputValue: "",
        isLoaded: false,
        loading: false,
        movies: [],
        error: "",
        filters: {
          Title: "",
          Genre: "",
          Type:"",
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

  
  handleGenreChange = Genre => {

    this.choicesUpdated('Genre', Genre.value);
    this.setState({ Genre });

  };

  handleLanguageChange = Language => {

    this.choicesUpdated('Language', Language.value);
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
  
  handleImdbRantingChangeValue  = (imdbRatingValue) => {
    this.setState({
      imdbRatingValue
    })
  }

  handleImdbRatingChange  = changeEvent => {

    this.choicesUpdated('imdbRating', changeEvent);

  };
  
  updateRuntime = (runtimeValue) => {
    this.setState({
      runtimeValue
    })

  }

  
  runtimeChange = changeEvent => {
    let selectedRuntime = changeEvent + " min";
    console.log(changeEvent)
  

    this.choicesUpdated('Runtime', selectedRuntime);

  };
  
  handleYearChange = (event) => {

    const inputYear = event.target.value;
    this.setState({ Year: inputYear});

    this.choicesUpdated('Year', inputYear);


  };

  handleTypeChange = Type => {

    this.choicesUpdated('Type', Type.value);
    this.setState({ Type });

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
        <Genre handleGenreChange={this.handleGenreChange} Genre={this.state.Genre} />
        <Type handleTypeChange={this.handleTypeChange} Type={this.state.Type}/>
        <Language handleLanguageChange={this.handleLanguageChange} Language={this.state.Language}/>
        <ImdbRatingF onImdbRatingChange={this.handleImdbRatingChange} imdbRatingValue={this.state.imdbRatingValue} updateImdbRatingValue={this.handleImdbRantingChangeValue} />
        <RuntimeFilter updateRuntime={this.updateRuntime} runtimeValue={this.state.runtimeValue} runtimeChange={this.runtimeChange}/>
        <Year handleYearChange={this.handleYearChange} Year={this.state.Year}/>
        {this.state.data ? (
          <div>
            {this.state.data.map((item, index) => ( 
              <Link to="/MoviePage">
              <img key={index} src={item.Poster} />s
              </Link>
            ))}
          </div>
        ) : (
          <div>
            {this.state.movies ? (
              <div>
                {this.state.movies.map((item) => (
                  <img className="posters" src={item.Poster}  />
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
        )}
        <div>
        
        </div>
      </div>
    );
  }
}

export default Search;
