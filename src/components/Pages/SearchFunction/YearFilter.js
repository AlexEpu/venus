import React, { Component } from 'react';
import "./YearFilter.css"
import TextField from '@material-ui/core/TextField';


class Year extends Component {


    render() {

        return (

            <div className="yearContainer">
              <TextField className="yearInput" id="outlined-basic" label="Enter Year" variant="outlined" value={this.props.Year} placeholder="Enter year" onChange={this.props.handleYearChange}/>

            </div >
        );

    }
}

export default Year;