import { Link } from "react-router-dom";
import logo from "../assets/img/logomvsmall.png";

function Navbar() {
  return (
    <>
      <Link to="/"><img src={logo} alt="logo"/></Link>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link to="/about" className="nav-link " title="About">
           <h3>About</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">
            <h3>Projects</h3>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            <h3>Contact</h3>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
