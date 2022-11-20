import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import Logo from "../img/finallogo.png";
import Signupop from "./Signupop";
const Navbar = () => {
  const[openProfile, setOpenProfile] = useState(false);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" /> 
        </div>
        <div className="link">
         <h6><strong>CARE CLUB</strong></h6>
        </div>
        <div className="links">
          <NavLink className="link" to="/">
            <h6>Home</h6>
          </NavLink>
          <span className="link" onMouseOver = {() => setOpenProfile((prev) => !prev)} >
            <h6>SignUp</h6>
          </span>
          {
            openProfile &&  <Signupop/>
          }
          <NavLink className="link" to="/login">
            <h6>Login</h6>
          </NavLink>
          <Link className="link" to="gallery" smooth = {true} duration = {1000}>
              {/* gallery link */}
            <h6>Gallery</h6>
          </Link>
          <Link className="link" to="feedback" smooth = {true} duration = {1000}>
            {/* feedback link  */}
            <h6>Reviews</h6>
          </Link>
          <Link className="link" to="contactinfo" smooth = {true} duration = {1000}>
            {/* footer link  */}
            <h6>Contact Info</h6>
          {/* <span>Profile</span>
          <span>LogOut</span> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
