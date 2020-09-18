import React, { Component } from "react";
import "./RuntimeFilter.css";
import Slider from '@material-ui/core/Slider';


 class RuntimeFilter extends Component
 {

    handleOnChange=(value)=>{

        this.props.runtimeChange(value);
    }

    render(){
        const {runtimeValue}=this.props;

        return(
            <div className="runtimeContainer" onMouseUp={() => { this.props.updateRuntime(runtimeValue) }}>
            <p>Movie Duration</p>
            <Slider className="slider" value={runtimeValue} onChange={changeEvent=>this.handleOnChange(changeEvent.target.value)}
            max={300}/>

            </div>






        )
    }

}

export default RuntimeFilter