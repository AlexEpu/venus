import React from "react";
import loginImg from "./login.svg";
import { Redirect } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'



const defaultState={username:"",
password:"",
usernameError:"",
passwordError:"",
isLoggedIn:false,
loginErr:"",
submitted:false}


export class Login extends React.Component {


   state={username:"",
   password:"",
   usernameError:"",
   passwordError:"",
   submitted:false,
   isLoggedIn:false,
   loginErr:"",

    }

   
   handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state)

  };


  validate=()=>{

    let usernameError="";
    let passwordError="";

    if(!this.state.username){
      usernameError='Username cannot be blank';
    }

    if(!this.state.password){
        passwordError='Password cannot be blank';
    }

    if(this.state.password.length<5){
      passwordError='Password is too short-minimum 5 characters required';
    }

    if (usernameError|| passwordError)
    {this.setState({usernameError,passwordError})
    return false;
  }
  return true;
  }

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();

      this.setState({submitted:true})
      const{username,password}=this.state;
    

      if (isValid) {
        fetch("https://movies-app-siit.herokuapp.com/auth/login", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }
        
      ),
      
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.message);
        const err=json.message
        this.setState({loginErr:err});
        localStorage.setItem("accessToken", json.accessToken);
        if(!this.state.loginErr) this.setState({isLoggedIn:true})
        this.setState(defaultState);
      });
    }
  };


  render() {const history = createHistory();

    if(this.state.isLoggedIn && localStorage.getItem("accessToken") ){
      return <Redirect to="./Movies" /> 
    }
    if(localStorage.getItem("accessToken")){return <div><h3> You are already logged in </h3></div>}

    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image-login">
            <img alt="login "src={loginImg} />
          </div>
          <div className="form" onSubmit={this.handleSubmit}>
            <div  className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
              <div className="valid">
            {this.state.usernameError}
            
              </div>            
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
              <div  className="valid">
            {this.state.passwordError}
            {this.state.loginErr}

          </div>
            </div>
          </div>
        </div>
        <div className="login-footer">
        <div className="valid">
            
              </div> 
          <button type="submit" className="btn-login" onClick={this.handleSubmit} >
            Login
          </button>
        </div>
      </div>
    );
  }
}
