import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./CountryFilter.css";
import Select from "react-select";

const options = [
  { value: "USA", label: "USA" },
  { value: "UK", label: "UK" },
  { value: "Romania", label: "Romania" },
  { value: "Philippines", label: "Philippines" },
  { value: "France", label: "France" },
  { value: "Canada", label: "Canada" },
  { value: "Japan", label: "Japan" },
  { value: "Romania", label: "Romania" },
  { value: "South Korea", label: "South Korea" },
];

class Country extends Component {
  handleChange = (Country) => {
    this.props.handleCountryChange(Country);
  };

  render() {
    const { Country } = this.props;
    return (
      <div className="country-container">
        <Select
          options={options}
          onChange={this.handleChange}
          value={Country}
          placeholder="Select Country"
          className="CountryClass"
        />
      </div>
    );
  }
}

export default Country;
