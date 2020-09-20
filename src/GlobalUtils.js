import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Movies from "./components/Pages/Movies";
import MyMovies from "./components/Pages/MyMovies";
import MyAccount from "./components/Pages/MyAccount";
import JoinUs from "./components/Pages/JoinUs";
import MoviePage from "./components/MovieDetailsContent";
import MovieSearch from "./components/Pages/MovieSearch";
import AddMovie from "./components/Pages/AddMovieFunctionality";
import Cookies from "js-cookie";
import { Component } from "react";
//import WelcomeBanner from "./components/WelcomeBanner";

class GlobalUtils extends Component {
  state = {
    isLoggedIn: false,
    username: null,
    token: null,
    showLogOutModal: false,
  };

  componentDidMount() {
    const token = Cookies.get("token");
    if (token) {
      this.setState({
        isLoggedIn: true,
        token,
        username: Cookies.get("username"),
      });
    }
  }

  handleLogin = (username, token) => {
    this.setState({
      isLoggedIn: true,
      username,
      token,
    });
  };

  handleLogOut = () => {
    const token = Cookies.get("token");

    fetch("https://movies-app-siit.herokuapp.com/auth/logout", {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          isLoggedIn: false,
          username: null,
          token: null,
          showLogOutModal: false,
        });
        Cookies.remove("token", {
          path: "",
        });
        Cookies.remove("username", {
          path: "",
        });
      });
    console.log(this.state.isLoggedIn);
  };

  handleLogOutShowModal = () => {
    this.setState({
      showLogOutModal: true,
    });
  };

  handleHideLogOutModal = () => {
    this.setState({
      showLogOutModal: false,
    });
  };

  render() {
    const { isLoggedIn, username } = this.state;

    return (
      <Router>
        <Navbar
          isLoggedIn={isLoggedIn}
          username={username}
          onShowLogOutModal={this.handleLogOutShowModal}
        />
        <Route path="/" exact component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/mymovies" component={MyMovies} />
        <Route path="/movie-search" component={MovieSearch} />
        <Route path="/myaccount" component={MyAccount} />
        <Route path="/join-us" component={JoinUs} />
        <Route path="/Addmovie" component={AddMovie} />
        <Route
          exact
          path="/movie-details"
          component={(props) => (
            <MoviePage {...props} isLoggedIn={isLoggedIn} />
          )}
        />
      </Router>
    );
  }
}

export default GlobalUtils;
