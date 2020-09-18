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
import Button from '@material-ui/core/Button';


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
    this.choicesUpdated('imdbRating', imdbRatingValue);

  }

  handleImdbRatingChange  = changeEvent => {

    this.choicesUpdated('imdbRating', changeEvent);

  };
  
  handleRuntimeChangeValue = (runtimeValue) => {
    this.setState({
      runtimeValue
    })
    this.choicesUpdated('Runtime', runtimeValue);

  }

  
  handleRuntimeChange  = eventChange => {
    let selectedRuntime = eventChange + " min";
    console.log(eventChange)
  

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
      <div className="search-container">
        <div className="dropdown">
        <Country
          handleCountryChange={this.handleCountryChange}
          Country={this.state.Country}
        />
        <Genre handleGenreChange={this.handleGenreChange} Genre={this.state.Genre} />
        <Type handleTypeChange={this.handleTypeChange} Type={this.state.Type}/>
        <Language handleLanguageChange={this.handleLanguageChange} Language={this.state.Language}/>
        </div>
        <div className="enterboxes">
        <RuntimeFilter onRuntimeChange={this.handleRuntimeChange} runtimeValue={this.state.runtimeValue} updateRuntimeValue={this.handleRuntimeChangeValue} />
        <ImdbRatingF onImdbRatingChange={this.handleImdbRatingChange} imdbRatingValue={this.state.imdbRatingValue} updateImdbRatingValue={this.handleImdbRantingChangeValue} />
        <Year handleYearChange={this.handleYearChange} Year={this.state.Year}/>
        </div>
        <div className="button-reset">
        <Button variant="contained" color="primary" content="span" className='clear-filters' onClick={this.clearFilters}>Reset filters</Button>

        </div>
      </div>
        

        {this.state.data ? (
          <div className="photo-cards">
            {this.state.data.map((item, index) => ( 
              <Link to="/MoviePage">
              <img key={index} src={item.Poster} />s
              </Link>
            ))}
          </div>
        ) : (
          <div >
            {this.state.movies ? (
              <div className="photo-cards">
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
