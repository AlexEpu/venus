import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";
import "./AddMovieFunctionality.css"

 class AddMovie extends Component{
constructor(props){
    super(props)
        this.state={
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
            console.log(this.state)
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
            const target = event.target;
            const value = target.value;
            const name = target.name;

            this.setState({[name]:value});
            console.log(event.target.value)
            console.log(event.target.name)
        };

       

       
    
            render(){
        return (
        
            <div className="AddForm">
                <div id="form">
                    <form onSubmit={this.submitMovie} >
                        <label className="addMovieTitle">Movie Title</label>
                        <input type="text" placeholder="Enter Movie Title"  name="Title" onChange={event=> (this.changeSubmissions(event))}/>
                        <label className="addYear">Year</label>
                        <input  type="number" placeholder="Enter a Year"  name="Year" onChange={this.changeSubmissions}></input>
                        <label className="addCountry">Country</label>
                        <input  type="text" placeholder="Enter a Country"  name="Country" onChange={this.changeSubmissions}></input>
                        <label className="addGenre">Genre</label>
                        <input  type="text" placeholder="Enter a Genre"  name="Genre" onChange={this.changeSubmissions}></input>
                        <label className="addLanguage">Year</label>
                        <input  type="text" placeholder="Enter Language"  name="Language" onChange={this.changeSubmissions}></input>
                        <label className="addRuntime">Runtime</label>
                        <input  type="number" placeholder="Enter Movie Runtime"  name="Runtime" onChange={this.changeSubmissions}></input>
                        <label className="addImdbVotes">IMDB votes</label>
                        <input  type="number" placeholder="Enter IMDB vote" name="ImdbVotes" onChange={this.changeSubmissions}></input>
                        <label className="addImdbRating">IMDB Rating</label>
                        <input  type="number" placeholder="Enter IMDB rating" name="ImdbRating" onChange={this.changeSubmissions}></input>
                        <label className="addID">IMDB ID</label>
                        <input  type="text" placeholder="Enter IMDB ID"  name="imdbID" onChange={this.changeSubmissions}></input>
                        <label className="addPoster">Poster</label>
                        <input  type="text" placeholder="Enter Poster URL"  name="Poster" onChange={this.changeSubmissions}></input>
                        <label className="addType">Type</label>
                        <input  type="text" placeholder="Enter Type"  name="Type" onChange={this.changeSubmissions}></input>
                        <div className="addMovieButton"> 
                        <button >Add Movie</button>
                        </div>
    
                    </form>
    
                </div>
            </div>
    
    
    
                )
            };
        
            
        
        
        
    
        }


    






 

 export  default AddMovie;