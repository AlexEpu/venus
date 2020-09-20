// import React from "react";
import React, { Component } from "react";
import "./SearchBarNav.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import searchIcon from "../images/search-logo-nav.png";
import { generateUrl } from "./Pages/SearchFunction/UrlSearch";
import { fetchMovies } from "./Pages/SearchFunction/FetchMovies.js";


class SearchBarNav extends Component {
  constructor() {
    super();

    this.state = {
      showForm: false,
      input:"",
      loading:false,
      movies:[],
      filters:{Title:""}
    };
  }


  
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
        });
      }
    );
  };





  handleOnSearchChange = (inputValue) => {
    this.setState({ input: inputValue, loading: true });

    this.choicesUpdated("Title", inputValue);
  };
  
  handleInputChange=(event)=>{ 
    this.setState({
    input: event.target.value});
    console.log(event.target.value)
  
  }

  handleSearch = (inputValue) => {
    this.setState({
      input: inputValue,
    });
  };

  handleOnChange = (event) => {
    this.choicesUpdated("Title", event.target.value);
    this.setState({
      input: event.target.value,
    });
  };


  showForm() {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  render() {
    let searchForm = this.state.showForm ? (
      <div>
      <form className="menu__search-form">
        <input className="menu__search-input"  value={this.state.input} placeholder="quick search...." updateValue={this.handleSearch} searchFilter={this.handleOnSearchChange} onChange={this.handleOnChange} />
      </form>
      <div> 
    {this.state.input? this.state.movies.map((item,index)=>(<div className="list"> <Link to={`/movie-details?id=${item._id}`}><p>{item.Title}</p></Link> </div>)) :""}
      </div>
      </div>
    ) : (
      ""
    );

    return (
      <div className="menu__right">
        <button
          onClick={this.showForm.bind(this)}
          style={{ background: "url(" + searchIcon + ")" }}
          className="menu__search-button">
      </button>
        {searchForm}
      </div>
    );
  }
}

export default SearchBarNav;
