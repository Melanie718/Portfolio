import { Link } from "react-router-dom";
import logo from "../assets/img/logosmall.png";

function Navbar() {
  return (
    <>
      <Link to="/"><img src={logo} className=""/></Link>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">
            Projets
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
