import React from "react";
import "./Footer.css";
import Footerlogo from "./../../img/logo/logo2_footer.png";

function Footer() {
  return (
    <footer>
      <div className="footer_Container">
        <div className="footer_Logo_area">
          <div className="footer_Logo_text">
            <a href="index.html">
              <img src={Footerlogo} alt="Logo" />
            </a>
            <p className="footer_Text">
              Land behold it created good saw after she'd Our set living. Signs
              midst dominion creepeth morning laboris nisi ufsit aliquip.
            </p>
            <div className="footer-social">
              <a href="#!">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a href="https://bit.ly/sai4ull">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#!">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#!">
                <i className="fab fa-pinterest-square"></i>
              </a>
            </div>
          </div>
          <div className="footer_Navigation_area">
            <h4>Navigation</h4>
            <ul>
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">About</a>
              </li>
              <li>
                <a href="#!">Services</a>
              </li>
              <li>
                <a href="#!">Blog</a>
              </li>
              <li>
                <a href="#!">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer_Navigation_area1">
            <h4>Services</h4>
            <ul>
              <li>
                <a href="#!">Blackforest</a>
              </li>
              <li>
                <a href="#!">Bodhubon</a>
              </li>
              <li>
                <a href="#!">Rongdhonu</a>
              </li>
              <li>
                <a href="#!">Meghrong</a>
              </li>
            </ul>
          </div>
          <div className="footer_Contact_area">
            <h4>Contact Us</h4>
            <p>76/A, Green Lane, Dhanmondi, NYC</p>
            <p>demomail89@gmail.com</p>
            <a href="#!">+10 (78) 738-9083</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom-area">
        <div className="footer_bottom_text">
          <p>
            Copyright &copy 2023 All rights reserved | This template is made
            with <i className="fa fa-heart color-danger"></i> by{" "}
            <a
              style={{ color: "#FFC800" }}
              href="https://colorlib.com"
              target="_blank"
              rel="noreferrer"
            >
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
