import React from "react";
// import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Logo from "../img/whitelogo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer" id="contactinfo">
      <div className="container">
        <div className="block">
          <figure>
            <img src={Logo} alt="Logo" />
          </figure>
          <h2 className="title">CARE CLUB</h2>
          <p>
            <i>
              {" "}
              " A helping hand can be a ray of sunshine
              <br /> in a cloudy world "
            </i>
          </p>
        </div>
        <hr className="hr1" />
        <br />
        <div className="row">
          <div className="col">
            <h4>#INCLUDE</h4>
            <ul>
              <h4 className="list-unstyled">
                <li>Punjab Engineering College</li>
                <li>Sector 12, 160012</li>
                <li>Chandigarh, India</li>
              </h4>
            </ul>
          </div>
          <div className="col1">
            <ul className="list-unstyled">
              <li className="flink">
                <a
                  href="https://www.google.com/maps/place/Punjab+Engineering+College/@30.7672898,76.7869762,15z/data=!4m5!3m4!1s0x0:0xc0844bf7cbdcc6e9!8m2!3d30.7672898!4d76.7869762"
                  className="flink"
                >
                  Location
                </a>
              </li>
              <li className="flink">
                <a href="mailto:sehaj.bt21ele@pec.edu.in" className="flink">
                  Contact Us (Mail)
                </a>
              </li>
              <li className="flink">Support US</li>
            </ul>
          </div>
          <div className="col1">
            <h4>Website Contents / Menue</h4>
            <ul className="list-unstyled">
              <li>
                <Link className="flink" to="about" smooth={true} duration={1000}>
                  About Us
                </Link>
              </li>
              <li>
                <Link className="flink" to="gallery" smooth={true} duration={1000}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link className="flink" to="feedback" smooth={true} duration={1000}>
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div className="col1">
            <h3> &nbsp;&nbsp;&nbsp;&nbsp;Connect With Us</h3>
            <span className="icons">
              <span className="facebook">
                <a href="https://www.facebook.com/" className="facebook">
                  <FaFacebook />
                </a>
              </span>
              &nbsp;
              <span className="instagram">
                <a href="https://www.instagram.com/" className="instagram">
                  <FaInstagram />
                </a>
              </span>
              &nbsp;
              <span className="twitter">
                <a href="https://twitter.com/" className="twitter">
                  <FaTwitter />
                </a>
              </span>
              &nbsp;
              <span className="telegram">
                <a href="https://www.telegram.com/" className="telegram">
                  <FaTelegram />
                </a>
              </span>
              &nbsp;
              <span className="linkedin">
                <a href="https://www.linkedin.com/" className="linkedin">
                  <FaLinkedinIn />
                </a>
              </span>
            </span>
          </div>
        </div>
        <hr className="ruler" />
        <div className="copyright">
          <span className="copyright">
            Copyright&nbsp;
            <FaRegCopyright />
            &nbsp;2022 #include Inc. All rights reserved.
          </span>
          <span className="p">
            <a href="https://policies.google.com/terms?hl=en-IN&fg=1" className="flink">
              Terms & Conditions &nbsp;
            </a>
            <div className="vl"></div>
            <a href="https://www.clientsondemand.com/privacy-policy/" className="flink">
              &nbsp;Privacy Policy&nbsp;
            </a>
            {/* <div className="vl"></div> */}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
