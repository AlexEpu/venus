import React, { Component } from 'react';
import "./ImdbRatingF.css";

import { makeStyles } from '@material-ui/core/styles';

import Slider from '@material-ui/core/Slider';




 class ImdbRatingF extends Component{

handleOnChange=(value)=>{
    this.props.updateImdbRatingValue(value);
}


render(){
    const{imdbRatingValue }=this.props;


    return(
        <div className="imdbContainer" onMouseUp={() => { this.props.onImdbRatingChange(imdbRatingValue ) }}>
            <p>IMDB rating</p>
            <Slider className="slider" value={imdbRatingValue}  onChange={changeEvent=>this.handleOnChange(changeEvent.target.value)}
            max={10} min={1}  defaultValue={1} 

            />


     


        </div>


    )





}



}

export default ImdbRatingF;