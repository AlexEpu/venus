import React, { useState } from "react";
import { Button } from "./Button";
import "./Navbar.css";
import { Link } from "react-router-dom";
import SearchBarNav from "./SearchBarNav";
import { CSSTransition } from "react-transition-group";
import mainlogo from "../images/main-logo.png";
import logomobile from "../images/logo-mobile-small.svg";

function BurgerNav() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={mainlogo} alt="logo" className="main-logo" />
        </Link>
        <Link to="/" className="logo-mobile-small">
          <img src={logomobile} alt="logo-mobile" className="mobile-logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/movies" className="nav-links" onClick={closeMobileMenu}>
              All Movies
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/mymovies"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              My Movies
            </Link>
          </li> */}
          <li className="nav-item">
            <Link
              to="/movie-search"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Movie Search
            </Link>
          </li>
          <li className="nav-item"></li>
          <li className="nav-item">
            <Link
              to="/join-us"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Join-Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default BurgerNav;
