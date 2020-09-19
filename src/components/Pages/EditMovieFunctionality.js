import React, {Component} from "react";

class EditForm extends Component {
  constructor(props){
      super(props)
  this.state = {
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
  };
}
 

componentDidMount() {
    this.setState({ isLoaded: true });

      const localStorageData = localStorage.getItem(`movie_${this.props.movie_id}`);
      
      if (localStorageData) {
        const data = JSON.parse(localStorageData);
        this.setState({
          isLoaded: false,
          movie: data,
        });
      } else {
        const url = `https://movies-app-siit.herokuapp.com/movies/${this.props.movie_id}`;
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            this.setState({
              isLoaded: false,
              movie: json,
            });
            localStorage.setItem(`movieID`, JSON.stringify(this.props.movie_id));
          });
        }
      
        this.setState({id: this.state.movie._id});
        this.setState({title: this.state.movie.Title});
        this.setState({year: this.state.movie.Year});
        this.setState({genre: this.state.movie.Genre});
        this.setState({language:this.state.movie.Language});
        this.setState({runtime: this.state.movie.Runtime});
        this.setState({Country: this.state.movie.Country});
        this.setState({Poster: this.state.movie.Poster});
        this.setState({ImdbVotes: this.state.movie.ImdbVotes});
        this.setState({ImdbRating:  this.state.movie.ImdbRating});
        this.setState({imdbID:  this.state.movie.imdbID});
        this.setState({Type:  this.state.movie.Type});
        this.setState({token: "accessToken" in localStorage ? localStorage.getItem("accessToken") : ""})
    
  }



  saveMovie() {
    const url = `https://movies-app-siit.herokuapp.com/movies/${this.state.id}`;
    fetch(url, {
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
        "imdbID": this.state.imdbID,

      })
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
      })
  };

  render(){
    return (
      <form >
        <div className="form-group">
          <label>Title</label>
          <input className="form-control" type="Text" value={this.state.Title} onChange={(e) => {
            this.setState({Title: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>Year</label>
          <input className="form-control" type="Number" value={this.state.Year} onChange={(e) => {
            this.setState({Year: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>Genre</label>
          <input className="form-control" value={this.state.Genre} onChange={(e) => {
            this.setState({Genre: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>Language</label>
          <input className="form-control" value={this.state.Language} onChange={(e) => {
            this.setState({Language: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>Runtime</label>
          <input className="form-control" value={this.state.Runtime} onChange={(e) => {
            this.setState({Runtime: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>Country</label>
          <input className="form-control" value={this.state.Country} onChange={(e) => {
            this.setState({Country: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>Poster</label>
          <input className="form-control" value={this.state.Poster} onChange={(e) => {
            this.setState({Poster: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>imdbID</label>
          <input className="form-control" value={this.state.imdbID} onChange={(e) => {
            this.setState({imdbID: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>ImdbVotes</label>
          <input className="form-control" value={this.state.ImdbVotes} onChange={(e) => {
            this.setState({ImdbVotes: e.target.value})
          }}/>
        </div>
        <div className="form-group">
          <label>ImdbRating</label>
          <input className="form-control" value={this.state.ImdbRating} onChange={(e) => {
            this.setState({ImdbRating: e.target.value})
          }}/>
        </div>
        <div className="text-center">
          <button className="btn btn-secondary mr-5" type="button" onClick={() => this.saveMovie(this)}>Save</button>
        </div>
      </form>
    );
  }
}

export default EditForm;