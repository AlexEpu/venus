import React, { Component } from 'react';
import Select from "react-select";
import "./TypeFilter.css";

const options = [
    { value: "movie", label: "movie" },
    { value: "series", label: "series" },
    { value: "game", label: "game" },

    
  ];
  
  class Type extends Component{
  
    
    handleChange = (Type) => {
  
      this.props.handleTypeChange(Type);
    }
  
  
  
      render(){
          const {Type}=this.props;
          return(
              <div className="TypeContainer">
                  <Select className="typeOption" value={Type} placeholder="Select Type" onChange={this.handleChange} options={options} />
  
  
  
              </div>
          )
      }
  
  
    }
    export default Type;