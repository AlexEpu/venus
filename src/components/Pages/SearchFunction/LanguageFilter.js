import React, { Component } from "react";
import "./LanguageFilter.css";
import Select from "react-select";


const options = [
    { value: 'English', label: 'English' },
    { value: 'French', label: 'French' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Japanese', label: 'Japanese' },
    { value: 'German', label: 'German' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Romanian', label: 'Romanian' },
    
]



class Language extends Component {

    handleChange=(Language)=>{
        this.props.handleLanguageChange(Language)
    }


render(){
    const{Language}=this.props;
    return(
        <div className="languageContainer">
            <Select value={Language}
            className="languageOption"
            placeholder="Select Language"
            onChange={this.handleChange}
            options={options}/>



        </div>




    )
}




}

export default Language;