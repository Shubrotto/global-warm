import { Link } from "react-router-dom";
import "./navbar.scss";
import Logo from "../../assets/web_logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import { CgClose } from "react-icons/cg";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar_container">
      <div className="navbar_wrapper">
        <div className="navbar_left">
          <Link className="logo_main" to="/">
            <img className="logo" src={Logo} alt="" />
            <span className="logo_title">Plant Trees</span>
          </Link>
        </div>
        {toggle ? (
          <div className="navbar_right" style={{ display: "none" }}>
            <ul className="navbar_lists">
              <li className="navbar_item">
                <Link to="/" className="navbar_link">
                  Home
                </Link>
              </li>
              <li className="navbar_item">
                <Link to="/about" className="navbar_link">
                  About
                </Link>
              </li>
              <li className="navbar_item">
                <Link to="/feature" className="navbar_link">
                  Feature
                </Link>
              </li>
              <li className="navbar_item">
                <Link to="/contact" className="navbar_link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div className="navbar_right" style={{ display: "flex" }}>
            <ul className="navbar_lists">
              <li className="navbar_item">
                <Link to="/" className="navbar_link">
                  Home
                </Link>
              </li>
              <li className="navbar_item">
                <Link to="/about" className="navbar_link">
                  About
                </Link>
              </li>
              <li className="navbar_item">
                <Link to="/feature" className="navbar_link">
                  Feature
                </Link>
              </li>
              <li className="navbar_item">
                <Link to="/contact" className="navbar_link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {toggle ? (
        <RiMenu3Fill
          className="hamburger_icon"
          onClick={() => setToggle(!toggle)}
        />
      ) : (
        <CgClose
          className="hamburger_icon"
          onClick={() => setToggle(!toggle)}
        />
      )}
    </div>
  );
};

export default Navbar;
