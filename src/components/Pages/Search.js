import React, { Component } from "react";

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
import NoResult from "./SearchFunction/NoResult"
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
  
  ratingValue  = (imdbRatingValue) => {
    this.setState({
      imdbRatingValue
    })
    this.choicesUpdated('imdbRating', imdbRatingValue);

  }

  ratingChange  = changeEvent => {

    this.choicesUpdated('imdbRating', changeEvent);

  };
  
  handleRuntimeChange = (runtimeValue) => {
    this.setState({
      runtimeValue
    })
    this.choicesUpdated('Runtime', runtimeValue);

  }

  
  handleRuntime  = eventChange => {
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
      const{isLoaded}=this.state;

      if(!isLoaded){return <div>Loading.Please wait..</div>}
      else {
    return (
      <div class="search-page">
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
        <RuntimeFilter handleRuntime={this.handleRuntime} runtimeValue={this.state.runtimeValue} handleRuntimeChange={this.handleRuntimeChange} />
        <ImdbRatingF ratingChange={this.ratingChange} imdbRatingValue={this.state.imdbRatingValue} ratingValue={this.ratingValue} />
        <Year handleYearChange={this.handleYearChange} Year={this.state.Year}/>
        </div>
        <div className="button-reset">
        <Button variant="contained" color="primary" content="span" className='clear-filters' onClick={this.clearFilters}>Reset filters</Button>

        </div>
      </div>
        

        {this.state.data ? (
          <div className="photo-cards">
            {this.state.data.filter((image) => image.Poster && image.Poster !== "N/A").map((image, index) => ( 
               <Link to={`/movie-details?id=${image._id}`} key={index}>
              <img className="posters" key={index} src={image.Poster} />s
              </Link>
            ))}
          </div>
        ) : (
          <div >
            {this.state.movies ? (
              <div className="photo-cards">
                {this.state.movies.filter((image) => image.Poster && image.Poster !== "N/A").map((image,index) => (
              <img className="posters" key={index} src={image.Poster} />

                ))}
              </div>
            ) : <div>
                <NoResult/>
                </div>
            }
          </div>
        )}
        <div>
        
        </div>
    </div>
    );
  }
}
}

export default Search;
