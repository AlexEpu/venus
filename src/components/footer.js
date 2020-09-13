import React from "react";
import "./footer.css";
import footerlogo from "../images/logo-footer.svg";

function Footer() {
  return (
    
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <img src={footerlogo} alt="logo-mobile" className="footer-logo" />
        </div>
        <div className="copyright">Copyright &copy; 2020 Venus Inc</div>
      </div>
    </div>
  );
}

export default Footer;
