import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"



class MovieBox extends Component {


    render() {


        return <div className='container-movie' >
            <p className='movie-title'>{this.props.movie_details.Title}</p>
            <img className='image-container-movies' src={this.props.movie_details.Poster}></img>
            <p className='movie-genre'><span className='genre-header'>Genre: </span>{this.props.movie_details.Genre}</p>
            <p className='movie-year'>{this.props.movie_details.Year}</p>
            <div className='movie-info-headers'>
                <p className='first-paragraph'>Language: </p>
                <p className='second-paragraph'>Country: </p>
                <p className='third-paragraph'>Runtime: </p>
            </div>
            <div className='all-movie-info'>
                <p className='movie-language'>{this.props.movie_details.Language}</p>
                <p className='movie-country'>{this.props.movie_details.Country}</p>
                <p className='movie-runtime'>{this.props.movie_details.Runtime}</p>
            </div>
            <p className='movie-raiting-number'><span className="fa fa-star checked"></span>{this.props.movie_details.imdbRating}</p>
           
            <div className="containerButtonMovieDetails">
                <Link to={"/movie-details?id=" + this.props.movie_details._id}><button className="buttonMovieDetails">View Details</button></Link>
            </div>



        </div>
    }

}

export default MovieBox;