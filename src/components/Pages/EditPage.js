import React, { Component } from "react";


class EditPage extends Component{   
    constructor(props){
        super(props)
    
    this.state={movie:{},
        isLoaded:false,
        token:"",
        id:"",
        Title: "",
        Year: "",
        Genre: "",
        Poster: "",
        Country: "",
        token:"",
        movie:{},
        Language: "",
        Runtime: "",
        isLoaded:false,
        ImdbVotes: "",
        ImdbRating: "",
        imdbID: "",
        Type: "",
        isLoaded: false,

    
    
}
    }


    componentDidMount(){
            console.log(this.props.location);
            const [search,id]=this.props.location.search.split("=");
            console.log(id);

            const url = `https://movies-app-siit.herokuapp.com/movies/${id}`;
            console.log(url)

            fetch(url)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
              this.setState({
                movie: json,
              });
            });
            console.log(this.state.movie)
            this.setState({id:this.state.movie_id});
             this.setState({Title: this.state.movie.Title});
             this.setState({Year: this.state.movie.Year});
             this.setState({Genre: this.state.movie.Genre});
            this.setState({Language:this.state.movie.Language});
            this.setState({Runtime: this.state.movie.Runtime});
            this.setState({Country:this.state.movie.Country});
            this.setState({Poster: this.state.movie.Poster});
            this.setState({ImdbVotes:this.state.movie.ImdbVotes});
            this.setState({ImdbRating:  this.state.movie.ImdbRating});
            this.setState({imdbID:  this.state.movie.imdbID});
            this.setState({Type: this.state.movie.Type});
            this.setState({token: localStorage.getItem("accessToken") })
    
    }

        

    saveMovie=()=> {
        const [search,id]=this.props.location.search.split("=");

        fetch(`https://movies-app-siit.herokuapp.com/movies/${id}`, {
          method: 'PUT',
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "X-Auth-Token": this.state.token
          },
          body: JSON.stringify({
            "Title": this.state.Title,
            "Year": this.state.Year,
            "Type": this.state.Genre,
            "Language": this.state.Language,
            "Runtime": this.state.Runtime,
            "Country": this.state.Country,
            "Poster": this.state.Poster,
            "ImdbVotes": this.state.ImdbVotes,
            "ImdbRating": this.state.ImdbRating,
            "imdbID": this.state.imdbID,
    
          })
        })
          .then(response => response.json())
          .then(json => {
            console.log(json);
            this.setState({isLoaded:true})
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
                Error: "",
              });
          })
      };


   render(){

       return(
           <div >
               <form >
        <div className="form-group">
          <label>Title</label>
          <input className="form-control" type="Text" name="Title" value={this.state.Title} onChange={(e) => {
            this.setState({Title: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>Year</label>
          <input className="form-control" type="Number" name="Year" value={this.state.Year} onChange={(e) => {
            this.setState({Year: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>Genre</label>
          <input className="form-control" value={this.state.Genre} name="Genre" onChange={(e) => {
            this.setState({Genre: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>Language</label>
          <input className="form-control" name="Language" value={this.state.Language} onChange={(e) => {
            this.setState({Language: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>Runtime</label>
          <input className="form-control" name="Runtime" value={this.state.Runtime} onChange={(e) => {
            this.setState({Runtime: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>Country</label>
          <input className="form-control" name="Country" value={this.state.Country} onChange={(e) => {
            this.setState({Country: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>Poster</label>
          <input className="form-control" name="Poster" value={this.state.Poster} onChange={(e) => {
            this.setState({Poster: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>imdbID</label>
          <input className="form-control" name="imdbID" value={this.state.imdbID} onChange={(e) => {
            this.setState({imdbID: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>ImdbVotes</label>
          <input className="form-control" name="ImdbVotes"value={this.state.ImdbVotes} onChange={(e) => {
            this.setState({ImdbVotes: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>ImdbRating</label>
          <input className="form-control" name="ImdbRating" value={this.state.ImdbRating} onChange={(e) => {
            this.setState({ImdbRating: e.target.value})
          }}/>
        </div>
        <div className="text-center">
          <button className="btn btn-secondary mr-5" type="button" onClick={() => this.saveMovie()}>Save</button>
        </div>
        {this.state.isLoaded ? (
                  <div className="isloaded">
                    <h3>Movie successfully edited!</h3>
                  </div>
                ) : (
                  ""
                )}
      </form>
           </div>






       )
   }

}

export default EditPage