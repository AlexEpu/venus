import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";
import "./AddMovieFunctionality.css"

 class AddMovie extends Component{

        state={
            Title: "",
            Year: "",
            Genre: "",
            Poster: "",
            Country: "",
            Language: "",
            Runtime: "",
            ImdbVotes: "",
            ImdbRating: "",
            imdbID: "",
            Type: "",
        }        

        

        submitMovie=(event)=>{
            event.preventDefault();

            let data={
                Title: this.state.Title,
                Country: this.state.Country,
                Year: this.state.Year,
                Genre: this.state.Genre,
                Language: this.state.Language,
                Runtime: this.state.Runtime,
                ImdbVotes: this.state.ImdbVotes,
                ImdbRating: this.state.ImdbRating,
                Poster: this.state.Poster,
                imdbID: this.state.imdbID,
                Type: this.state.Type,

            };
            this.addMovie(data);
            this.setState({
                Title: "",
                Year: "",
                Genre: "",
                Poster: "",
                Country: "",
                Language: "",
                Runtime: "",
                ImdbVotes: "",
                ImdbRating: "",
                imdbID: "",
                Type: "",
              });
        };

       

        addMovie=(data)=>{
            const token=localStorage.getItem("accessToken");

            fetch(`https://movies-app-siit.herokuapp.com/movies`, {
                method: "POST", 
                mode: "cors",
                cache: "no-cache",
                credentials:"same-origin",
                headers: {
                  "Content-Type": "application/json",
                  "X-Auth-Token": token,
                },
                redirect: "follow",
                referrerPolicy: "no-referrer", 
                body: JSON.stringify(data),
              })
                .then((response) => response.json())
                .then((json) => {
                  console.log(json);
                });

        }

        changeSubmissions=(event)=>{
            this.setState({[event.target.name]:event.target.value});
            console.log(event.target.value)
            console.log(event.target.name)
        };

       

       
    
            render(){
        return (
        
            <div className="AddForm">
                <div id="form">
                    <form >
                        <label className="addMovieTitle">Movie Title</label>
                        <input type="text" placeholder="Enter Movie Title" name="title" onChange={this.changeSubmissions}/>
                        <label className="addYear">Year</label>
                        <input  type="number" placeholder="Enter a Year"  name="year" onChange={this.changeSubmissions}></input>
                        <label className="addCountry">Country</label>
                        <input  type="text" placeholder="Enter a Country"  name="country" onChange={this.changeSubmissions}></input>
                        <label className="addGenre">Genre</label>
                        <input  type="text" placeholder="Enter a Genre"  name="genre" onChange={this.changeSubmissions}></input>
                        <label className="addLanguage">Year</label>
                        <input  type="text" placeholder="Enter Language"  name="language" onChange={this.changeSubmissions}></input>
                        <label className="addRuntime">Runtime</label>
                        <input  type="number" placeholder="Enter Movie Runtime"  name="runtime" onChange={this.changeSubmissions}></input>
                        <label className="addImdbVotes">IMDB votes</label>
                        <input  type="number" placeholder="Enter IMDB vote" name="imdbVotes" onChange={this.changeSubmissions}></input>
                        <label className="addImdbRating">IMDB Rating</label>
                        <input  type="number" placeholder="Enter IMDB rating" name="imdbRating" onChange={this.changeSubmissions}></input>
                        <label className="addID">IMDB ID</label>
                        <input  type="text" placeholder="Enter IMDB ID"  name="imdbID" onChange={this.changeSubmissions}></input>
                        <label className="addPoster">Poster</label>
                        <input  type="text" placeholder="Enter Poster URL"  name="poster" onChange={this.changeSubmissions}></input>
                        <label className="addType">Type</label>
                        <input  type="text" placeholder="Enter Type"  name="type" onChange={this.changeSubmissions}></input>
                        <div className="addMovieButton"> 
                        <button onClick={this.submitMovie}>Add Movie</button>
                        </div>
    
                    </form>
    
                </div>
            </div>
    
    
    
                )
            };
        
            
        
        
        
    
        }


    






 

 export  default AddMovie;