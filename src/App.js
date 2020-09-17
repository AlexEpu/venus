import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./components/Pages/Movies";
import MyMovies from "./components/Pages/MyMovies";
import MyAccount from "./components/Pages/MyAccount";
import JoinUs from "./components/Pages/JoinUs";
import MovieDetails from "./components/Pages/MovieDetails";
import Footer from "./components/footer";
import Scroll from "./components/ScrollToTop";
//import WelcomeBanner from "./components/WelcomeBanner";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/mymovies" component={MyMovies} />
        <Route path="/myaccount" component={MyAccount} />
        <Route path="/join-us" component={JoinUs} />
        <Route path="/movie-details" component={MovieDetails} />
      </Switch>
      <Footer />
      <Scroll showBelow={50} />
    </Router>
  );
}

export default App;
