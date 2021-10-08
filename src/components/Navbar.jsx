import logo from "../assets/img/logomvsmall.png";


function Navbar() {
  return (
    <div id="navbar" className="sticky-top">
      <a href="#home"><img src={logo} alt="logo"/></a>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a href="#about" className="nav-link " title="About">
           <h3>About</h3>
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link">
            <h3>Projects</h3>
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link">
            <h3>Contact</h3>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
