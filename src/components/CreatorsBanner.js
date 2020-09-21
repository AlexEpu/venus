import React from "react";
import "./CreatorsBanner.css";

function CreatorsBanner() {
  return (
    <div className="banner-main-container">
      <div className="picture-container">
        <div className="picture-left-container">
          <img
            className="picture-left"
            src={require("../images/ade.jpg")}
            alt="photo"
          ></img>
          <div className="short-desc">
            <p className="language">HTML</p>
            <p className="language">CSS</p>
            <p className="language">JS</p>
            <p className="language">REACT</p>
          </div>

          <h1 className="picture-left-text">Adelina</h1>
          <p className="picture-left-paragraph">
            Hello! My name is Adelina and at the moment I'm a rookie in front
            end development. I'm a friendly, team-working person eager to learn
            more and gain eperience in the industry. I'm looking forward in
            expanding my knowledge and building more interactive web
            applications. If you want to get in touch you can find me at the
            links below.
          </p>
          <div className="socials-home">
            <a href="https://facebook.com" target="_blank">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://instagram.com" target="_blank">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://linkedin.com" target="_blank">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="picture-middle-container">
          <img
            className="picture-middle"
            src={require("../images/sergiu.jpg")}
            alt="photo"
          ></img>
          <div className="short-desc">
            <p className="language">HTML</p>
            <p className="language">CSS</p>
            <p className="language">JS</p>
            <p className="language">REACT</p>
          </div>

          <h1 className="picture-middle-text">Sergiu</h1>
          <p className="picture-middle-paragraph">
            Hello! My name is Sergiu and at the moment I'm a rookie in front end
            development. I'm a friendly, team-working person eager to learn more
            and gain eperience in the industry. I'm looking forward in expanding
            my knowledge and building more interactive web applications. If you
            want to get in touch you can find me at the links below.
          </p>
          <div className="socials-home">
            <a href="https://facebook.com" target="_blank">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://instagram.com" target="_blank">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://linkedin.com" target="_blank">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="picture-right-container">
          <img
            className="picture-right"
            src={require("../images/alex.jpg")}
            alt="photo"
          ></img>
          <div className="short-desc">
            <p className="language">HTML</p>
            <p className="language">CSS</p>
            <p className="language">JS</p>
            <p className="language">REACT</p>
          </div>
          <h1 className="picture-right-text">Alex</h1>
          <p className="picture-right-paragraph">
            Hello! My name is Alex and at the moment I'm a rookie in front end
            development. I'm a friendly, team-working person eager to learn more
            and gain eperience in the industry. I'm looking forward in expanding
            my knowledge and building more interactive web applications. If you
            want to get in touch you can find me at the links below.
          </p>
          <div className="socials-home">
            <a href="https://facebook.com" target="_blank">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://instagram.com" target="_blank">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://linkedin.com" target="_blank">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatorsBanner;
