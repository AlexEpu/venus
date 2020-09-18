import React, { Component } from 'react';
import "./ImdbRatingF.css";

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';




 class ImdbRatingF extends Component{

handleOnChange=(value)=>{
    this.props.updateImdbRatingValue(value);
}


render(){
    const{imdbRatingValue}=this.props;


    return(
        <div className="imdbContainer" onMouseLeave={() => { this.props.onImdbRatingChange(imdbRatingValue) }}>
            <TextField className="imdbInput"  variant="outlined" id="outlined-basic" label="IMDB Rating" value={imdbRatingValue}  placeholder="Enter IMDB rating" onChange={changeEvent=>this.handleOnChange(changeEvent.target.value)}
           

            />


     


        </div>


    )





}



}

export default ImdbRatingF;