import "./footer.css";
import footerlogo from "../images/logo-footer.svg";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


function Footer() {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);


  return (
    <div className="container-fluid">
      <div data-aos="fade" className="footer">
        <div data-aos-once="false" data-aos="fade-up" className="logo">
          <img src={footerlogo} alt="logo-mobile" className="footer-logo" />
        </div>
        <div className="copyright">Copyright &copy; 2020 Venus Inc</div>
      </div>
    </div>
  );
}

export default Footer;
