import React from "react";
import loginImg from "./login.svg";
import { Redirect } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Cookies from "js-cookie";
import { useAlert } from 'react-alert'
import './LoginApp.css'
 

const Alert = () => {
  const alert = useAlert()}

const defaultState={username:"",
password:"",
usernameError:"",
passwordError:"",
isLoggedIn:false,
submitted:false}



export class Login extends React.Component {


   state={username:"",
   password:"",
   usernameError:"",
   passwordError:"",
   errMessage:"",
   submitted:false,
   isLoggedIn:false,

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
        username:this.state.username,
        password:this.state.password,
        
      }
        
      ),
      
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json.message);
        localStorage.setItem("accessToken", json.accessToken);
        if(json.authenticated===true)
        window.location="/";
        else this.setState({errMessage:json.message})
        this.setState(defaultState);
      });
    }
  };


  render() {const history = createHistory();



    return (
      <div className="base-container" ref={this.props.containerRef}>
        {/* <div className="header">Login</div> */}
        <div className="content">
          <div className="image-login image-login-sign-in">
            <i class="fas fa-door-open fa-5x"></i>
            {/* <img alt="login "src={loginImg} /> */}
          </div>
          <div className="errmessage">{this.state.errMessage}</div>
          <div className="form" onSubmit={this.handleSubmit}>
            <div className="form-group form-username">
              {/* <label htmlFor="username">Username</label> */}
              <input
                type="text"
                classbame="login-username"
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
              <div className="valid">{this.state.usernameError}</div>
            </div>
            <div className="form-group form-pass">
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <div className="valid">{this.state.passwordError}</div>
            </div>
          </div>
        </div>
        <div className="login-footer">
          <div className="valid"></div>
          <button
            type="submit"
            className="btn-login"
            onClick={this.handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    );
  }
}
