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
import BurgerNav from "./BurgerCall";

export class Navbar extends Component {

  constructor(props){
    super(props)
    this.state={message:""}


    this.handleLogOut = () => {
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
  
        });
        return true;
    };


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
                    <Link to="/addmovie">
                      <p>Add</p>
                    </Link>
                  </li>
                  <li className="username">
                    <FontAwesomeIcon icon={faUser} className="usernameIcon" />
                    {username}
                  </li>
                  <div 
                   className="log-out-Button"> 
                    <FontAwesomeIcon icon={faSignOutAlt} onClick={this.handleLogOut} />
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                 
                </React.Fragment>
              )}
            </ul>
          </div>
          <li className="nav-item"></li>

          <BurgerNav />
          <SearchBarNav />
          <i className="fas fa-plus fa-lg"></i>
          <Link to="/join-us">
            <i className="fas fa-user user-icon fa-lg"></i>
          </Link>
        </nav>
      </>
    );
  }
}

export default Navbar;
