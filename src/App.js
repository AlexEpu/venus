import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Movies from "./components/Pages/Movies";
import MyMovies from "./components/Pages/MyMovies";
import MyAccount from "./components/Pages/MyAccount";
import JoinUs from "./components/Pages/JoinUs";
import Footer from "./components/footer";
import Scroll from "./components/ScrollToTop";
import GlobalUtils from "./GlobalUtils"

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/" exact component={Home} /> */}
        {/* <Route path="/movies" component={Movies} /> */}
        <Route path="/mymovies" component={MyMovies} />
        <Route path="/myaccount" component={MyAccount} />
        <Route path="/join-us" component={JoinUs} />
      </Switch>
      <GlobalUtils />
      <Footer />
      <Scroll showBelow={50} />
    </Router>
  );
}

export default App;
