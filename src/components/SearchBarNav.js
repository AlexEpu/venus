// import React from "react";
import React, { Component } from "react";
import "./SearchBarNav.css";
import { Button } from "./Button";
import searchIcon from "../images/search-logo-nav.png";

class SearchBarNav extends Component {
  constructor() {
    super();

    this.state = {
      showForm: false,
    };
  }

  showForm() {
    this.setState({
      showForm: !this.state.showForm,
    });
  }

  render() {
    let searchForm = this.state.showForm ? (
      <form className="menu__search-form" method="POST">
        <input className="menu__search-input" placeholder="quick search...." />
      </form>
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
