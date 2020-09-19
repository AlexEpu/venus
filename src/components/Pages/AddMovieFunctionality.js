import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";
import "./AddMovieFunctionality.css"
import{handleImputs,shouldAddMovie} from "./ValidateAddMovie"

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
            Error:""
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
                Error:""

              });
        };

       validateInputs=()=> {
        let Error="";

        if(!this.state.Title){
            Error='Input cannot be blank';
          }

        if(!this.state.Year){
            Error='Input cannot be blank';
          }

        if(!this.state.Genre){
            Error='Input cannot be blank';
          }

        if(!this.state.Poster){
            Error='Input cannot be blank';
          }
        
        if(!this.state.Country){
            Error='Input cannot be blank';
          }
        
        if(!this.state.Language){
            Error='Input cannot be blank';
          }
        
        if(!this.state.Runtime){
            Error='Input cannot be blank';
          }

        if(!this.state.ImdbVotes){
            Error='Input cannot be blank';
          }

        if(!this.state.ImdbRating){
            Error='Input cannot be blank';
          }

        if(!this.state.imdbID){
            Error='Input cannot be blank';
          }

        if(!this.state.imdbID){
            Error='Input cannot be blank';
          }

          if(Error){
              this.setState({Error})
              return false;
          }
          return true;
       }

        addMovie=(data)=>{
            const token=localStorage.getItem("accessToken");
            const valid = this.validateInputs();

            if(valid){
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
                        <div>
                            <h6 className="validateInput">{this.state.Error} </h6>
                        </div>
                        <label className="addYear">Year</label>
                        <input  type="number" placeholder="Enter a Year"  name="Year" onChange={this.changeSubmissions}></input>
                        <div>
                            <h6 className="validateInput">{this.state.Error} </h6>
                        </div>
                        <label className="addCountry">Country</label>
                        <input  type="text" placeholder="Enter a Country"  name="Country" onChange={this.changeSubmissions}></input>
                        <div>
                            <h6 className="validateInput">{this.state.Error} </h6>
                        </div>
                        <label className="addGenre">Genre</label>
                        <input  type="text" placeholder="Enter a Genre"  name="Genre" onChange={this.changeSubmissions}></input>
                        <div>
                            <h6 className="validateInput">{this.state.Error} </h6>
                        </div>
                        <label className="addLanguage">Year</label>
                        <input  type="text" placeholder="Enter Language"  name="Language" onChange={this.changeSubmissions}></input>
                        <div>
                            <h6 className="validateInput">{this.state.Error} </h6>
                        </div>
                        <label className="addRuntime">Runtime</label>
                        <input  type="number" placeholder="Enter Movie Runtime"  name="Runtime" onChange={this.changeSubmissions}></input>
                        <label className="addImdbVotes">IMDB votes</label>
                        <input  type="number" placeholder="Enter IMDB vote" name="ImdbVotes" onChange={this.changeSubmissions}></input>
                        <div>
                            <h6 className="validateInput">{this.state.Error} </h6>
                        </div>
                        <label className="addImdbRating">IMDB Rating</label>
                        <input  type="number" placeholder="Enter IMDB rating" name="ImdbRating" onChange={this.changeSubmissions}></input>
                        <div>
                            <h6 className="validateInput">{this.state.Error} </h6>
                        </div>
                        <label className="addID">IMDB ID</label>
                        <input  type="text" placeholder="Enter IMDB ID"  name="imdbID" onChange={this.changeSubmissions}></input>
                        <div>
                            <h6 className="validateInput">{this.state.Error} </h6>
                        </div>
                        <label className="addPoster">Poster</label>
                        <input  type="text" placeholder="Enter Poster URL"  name="Poster" onChange={this.changeSubmissions}></input>
                        <div>
                            <h6 className="validateInput">{this.state.Error} </h6>
                        </div>
                        <label className="addType">Type</label>
                        <input  type="text" placeholder="Enter Type"  name="Type" onChange={this.changeSubmissions}></input>
                        <div className="addMovieButton"> 
                        <div>
                            <h6 className="validateInput">{this.state.Error} </h6>
                        </div>
                        <button >Add Movie</button>
                        </div>
    
                    </form>
    
                </div>
            </div>
    
    
    
                )
            };
        
            
        
        
        
    
        }


    






 

 export  default AddMovie;