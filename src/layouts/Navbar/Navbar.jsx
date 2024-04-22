import { Link } from "react-router-dom";
import "./navbar.scss";
import Logo from "../../assets/web_logo.png";
import { CiMenuFries } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_wrapper">
        <div className="navbar_left">
          <Link className="logo_main" to="/">
            <img className="logo" src={Logo} alt="" />
            <span className="logo_title">Plant Trees</span>
          </Link>
        </div>
        <div className="navbar_right">
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

        {/* <CiMenuFries className="hamburger_icon" /> */}
      </div>
    </div>
  );
};

export default Navbar;
