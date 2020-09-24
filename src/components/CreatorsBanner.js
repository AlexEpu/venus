import "./CreatorsBanner.css";
import React, { useEffect } from "react";
import "./CreatorsBannerTitle.css";
import Aos from "aos";
import "aos/dist/aos.css";

function CreatorsBanner() {

useEffect(() => {
  Aos.init({ duration: 1000 });
}, []);

  return (
    <div data-aos="fade-up" className="banner-main-container">
      <div className="picture-container">
        <div data-aos="fade-right" className="picture-left-container">
          <img
            data-aos="flip-left"
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

          <h1 data-aos="zoom-in" className="picture-left-text">
            Adelina
          </h1>
          <p data-aos="zoom-in" className="picture-left-paragraph">
            Hello! My name is Adelina and at the moment I'm a rookie in front
            end development. I'm a friendly, team-working person eager to learn
            more and gain experience in the industry. I'm looking forward in
            expanding my knowledge and building more interactive web
            applications. If you want to get in touch you can find me at the
            links below.
          </p>
          <div data-aos="zoom-in" className="socials-home">
            <a href="https://www.facebook.com/AdelinaCimpan96/" target="_blank">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://github.com/AdelineC96" target="_blank">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/adelina-cîmpan-ba5199198"
              target="_blank"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="picture-middle-container">
          <img
            data-aos="flip-up"
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

          <h1 data-aos="zoom-in" className="picture-middle-text">
            Sergiu
          </h1>
          <p data-aos="zoom-in" className="picture-middle-paragraph">
            Hello! My name is Sergiu and at the moment I'm a rookie in front end
            development. I'm a friendly, team-working person eager to learn more
            and gain experience in the industry. I'm looking forward in expanding
            my knowledge and building more interactive web applications. If you
            want to get in touch you can find me at the links below.
          </p>
          <div data-aos="zoom-in" className="socials-home">
            <a href="https://www.facebook.com/barnutsergiu" target="_blank">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://github.com/barnutsergiu" target="_blank">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sergiu-barnut-584403193/"
              target="_blank"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
        <div data-aos="fade-left" className="picture-right-container">
          <img
            data-aos="flip-right"
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
          <h1 data-aos="zoom-in" className="picture-right-text">
            Alex
          </h1>
          <p data-aos="zoom-in" className="picture-right-paragraph">
            Hello! My name is Alex and at the moment I'm a rookie in front end
            development. I'm a friendly, team-working person eager to learn more
            and gain experience in the industry. I'm looking forward in expanding
            my knowledge and building more interactive web applications. If you
            want to get in touch you can find me at the links below.
          </p>
          <div data-aos="zoom-in" className="socials-home">
            <a href="https://www.facebook.com/epuran.alex" target="_blank">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="https://github.com/AlexEpu" target="_blank">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/epuran-alexandru-lucian-3004981a0/"
              target="_blank"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatorsBanner;
