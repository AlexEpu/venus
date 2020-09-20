import React, { useState } from "react";
import { Component } from "react";
import { Button } from "./Button";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchBarNav from "./SearchBarNav";
import { CSSTransition } from "react-transition-group";
import mainlogo from "../images/main-logo.png";
import logomobile from "../images/logo-mobile-small.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import BurgerNav from "./BurgerCall";

export class Navbar extends Component {

  constructor(props){
    super(props)
    this.state={message:""}
    


    this.handleLogOut = () => {
      confirmAlert({
        title: 'Confirm to submit',
        message: 'Are you sure you want to Log Out?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {

        fetch("https://movies-app-siit.herokuapp.com/auth/logout", {
        method: "GET",
        headers: {
          "X-Auth-Token":localStorage.removeItem("accessToken"),
        },

      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          const message=json.message
          this.setState({message})
          window.location="/"
  
        });
        return true;}
          },
          {
            label: 'No',
            onClick: () => {window.location="/"}
          }
        ]
      });


  }
}

  render() {
    const { isLoggedIn, username, onShowLogOutModal } = this.props;

    return (
      <>
        <nav className="navbar">
          <div>
            <ul className="on-login-buttons">
              {localStorage.getItem("accessToken") ? (
                <React.Fragment>
                  <li className="AddButton">
                    <Link to="./Addmovie">
                      <i className="fas fa-plus fa-lg"></i>
                    </Link>
                  </li>
                  {/* <li className="username">
                    <FontAwesomeIcon icon={faUser} className="usernameIcon" />
                    {username}
                  </li> */}
                  <div className="log-out-Button">
                    <Link to="/join-us">
                      <FontAwesomeIcon
                        icon={faSignOutAlt}
                        onClick={this.handleLogOut}
                      />
                      <h1>{this.state.message}</h1>
                    </Link>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment></React.Fragment>
              )}
            </ul>
          </div>
          <li className="nav-item"></li>

          <BurgerNav />
          <SearchBarNav />
          {localStorage.getItem("accessToken")? "": <Link to="/join-us">
            <i className="fas fa-user user-icon fa-lg"></i>
          </Link> }
          
        </nav>
      </>
    );
  }
}

export default Navbar;
