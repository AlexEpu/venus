import React, { Component } from "react";
import "./RuntimeFilter.css";
import TextField from '@material-ui/core/TextField';


 class RuntimeFilter extends Component
 {

    handleOnChange=(value)=>{

        this.props.handleRuntimeChange(value);
    }

    render(){
        const {runtimeValue}=this.props;

        return(
            <div className="runtimeContainer" onMouonseOut={() => { this.props.handleRuntime(runtimeValue) }}>
            <TextField id="outlined-basic" placeholder="Enter Minutes" label="Movie Duration" variant="outlined" className="runtimeInput" value={runtimeValue} onChange={changeEvent=>this.handleOnChange(changeEvent.target.value)}
            />

            </div>






        )
    }

}

export default RuntimeFilter