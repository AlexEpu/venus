import React, {Component} from "react";
import Select from "react-select"
import "./GenreFilter.css"


const options = [
    { value: 'adventure', label: 'Adventure' },
    { value: 'action', label: 'Action' },
    { value: 'animation', label: 'Animation' },
    { value: 'comedy', label: 'Comedy' },
    { value: 'crime', label: 'Crime' },
    { value: 'drama', label: 'Drama' },
    { value: 'family', label: 'Family' },
    { value: 'fantasy', label: 'Fantasy' },
    { value: 'horror', label: 'Horror' },
    { value: 'romance', label: 'Romance' },
    { value: 'sci-fi', label: 'Sci-Fi' },
    { value: 'thriller', label: 'Thriller' },
    { value: 'western', label: 'Western' }
  ];

  class Genre extends Component{
  
    
  handleChange = (Genre) => {

    this.props.handleGenreChange(Genre);
  }



    render(){
        const {Genre}=this.props;
        return(
            <div className="genreContainer">
                <Select value={Genre} placeholder="Select Genre" onChange={this.handleChange} options={options} />



            </div>
        )
    }


  }
  export default Genre;