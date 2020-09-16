import React, {Component} from "react";
import "../../App.css";
import WelcomeBanner from "../WelcomeBanner";
import "./searchBar.css"
import Footer from "../footer";
import { render } from "@testing-library/react";
import { TransferWithinAStation } from "@material-ui/icons";


const defaultState={searchData:null,
  images:null,
};



 class Movies extends Component {

  

  constructor()
  {
    super()
    this.state={
      searchData:null,
      images:null,
     
    }


  }

  


  componentDidMount() {
    // #1. First of all you have to fetch the images.
    fetch("https://ancient-caverns-16784.herokuapp.com/movies?take=9999999")
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json(); //we only get here if there is no error
      })
      .then((json) => {
        this.setState({images:json.results})
        console.log(json.results)

      })

  }


  search(key){
    console.log(key);
    
      fetch(
        `https://ancient-caverns-16784.herokuapp.com/movies?take=10&Title=`+key
      )
        .then(response => response.json())
        .then(json => {
          console.log(json.results);
          this.setState({searchData:json.results})
        });
    
  }



  render(){


    return (
    <div>
      <input type="text" className="searchInput" onChange={(event=>this.search(event.target.value))}/>
       
      <div>
      {
      this.state.searchData? 
      <div> 
        {this.state.searchData.map((item)=>
           <img src={item.Poster}/>
           )}
      </div>
      : <div>
         {
      this.state.images? 
      <div> 
        {this.state.images.map((item)=>
           <img src={item.Poster}/>
           )} 

      </div>
      :  ""
        }
         </div>
        }
        
      </div>

    </div>
    
  );
  };
}

export default Movies;