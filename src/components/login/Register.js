
import React from "react";
import loginImg from "./login.svg";
import  {Redirect} from "react-router-dom"




export class Register extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username:"",
        email:"",
        password:"",
        usernameError:"",
        emailError:"",
        passwordError:"",
        loginErr:"",
        isReg:"",
        submitted:false
       };
    }

      
   handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  validate=()=>{

    let usernameError="";
    let passwordError="";
    let emailError="";

    if(!this.state.username){
      usernameError='Username cannot be blank';
    }

    if(!this.state.email.includes("@")){
      emailError='Invalid email address';
    }


    if(this.state.password.length<5){
      passwordError='Password is too short-minimum 5 characters required';
    }

    if (usernameError|| passwordError|| emailError)
    {this.setState({usernameError,passwordError,emailError})
    return false;
  }
  return true;
  }

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();

      this.setState({submitted:true})
      const{username,password,email}=this.state;


      if (isValid) {
        fetch("https://movies-app-siit.herokuapp.com/auth/register", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }
        
      ),
      
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        const err=json.message
        localStorage.setItem("accessToken", json.accessToken);
        this.setState({loginEr:err, isReg:true})

      });
    }
  };


    render() { 
      if(this.state.isReg){
        return <Redirect to="/LoginApp"/> 
      }
       

        return(
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Register</div>
          <div className="content">
            <div className="image">
              <img alt="register" src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
                <div className="valid">
            {this.state.usernameError}
              </div> 
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
                <div className="valid">
            {this.state.emailError}
              </div> 
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleChange} />
                <div className="valid">
            {this.state.passwordError}
              </div> 
              </div>
            </div>
          </div>
          <div className="footer">
          <div className="valid">
            {this.state.loginEr}
            
              </div> 
            <button type="button" className="btn" onClick={this.handleSubmit}>
              Register
            </button>
          </div>
        </div>
      );
    }
  }