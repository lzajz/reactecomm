import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="social">
        <span className="icon">
          <a href="https://twitter.com/">
            <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
          </a>
        </span>
        <span className="icon">
          <a href="https://www.facebook.com/">
            <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
          </a>
        </span>
        <span className="icon">
          <a href="https://www.instagram.com">
            <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
          </a>
        </span>
      </div>

      <p>&#169; Artesenias </p>
    </div>
  );
};
export default Footer;
