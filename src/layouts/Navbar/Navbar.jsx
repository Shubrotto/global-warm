import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="navbar_wrapper">
        <div className="navbar_left">
          <Link to="/">
            <img
              src="https://www.shutterstock.com/image-vector/save-tree-260nw-604718216.jpg"
              alt=""
            />
            <span>Plant Trees</span>
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
      </div>
    </div>
  );
};

export default Navbar;
