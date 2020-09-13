import React from 'react';
import "./logout.css"

export  class Button extends React.Component {
constructor(props){
    super(props)
   
    this.state={message:""}
     

  this.handleLogOut = () => {
    fetch("https://movies-app-siit.herokuapp.com/auth/logout", {
      method: "GET",
      headers: {
        "X-Auth-Token":localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        const message=json.message
        this.setState({message})

      });
      return true;
  };
}
  
  render() {
    console.log(this.state);

    return (
      <div className="counter">
        <button className="logout" onClick={this.handleLogOut}>
          Log Out 
        </button>
        {this.state.message}
         </div>
  
    );
  }
}

export default Button;