import React, {Component} from "react";
import "../../App.css";
import WelcomeBanner from "../WelcomeBanner";
import "./searchBar.css"
import Footer from "../footer";
import { render } from "@testing-library/react";
import Pagination from "./Pagination"

class AllMovies extends Component {

    constructor()
    {
      super()
      this.state={
      images:null  }
  
  
    }
    componentDidMount() {
        // #1. First of all you have to fetch the images.
        fetch("https://ancient-caverns-16784.herokuapp.com/movies?take=99900")
          .then((response) => {
            if (!response.ok) {
              throw response;
            }
            return response.json(); //we only get here if there is no error
          })
          .then((images) => {
              console.log(images.results)
            this.setState({ images: images.results });
          })
          .catch((err) => {
            this.displayError();
          });
      }
    
  
  
    
   
  
    render(){
        const { images } = this.state;

  
    return (
        <div>
        {
        this.state.images? 
        <div> 
          {this.state.images.map((item)=>
             <img src={item.Poster}/>
             )}
        </div>
        :  <div>      
  
        <AllMovies/>
  
        </div>
          }
          </div>
    );
    };
  }
  
  export default AllMovies;