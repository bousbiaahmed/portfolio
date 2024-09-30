import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a className="home" href="#home">
            Home
          </a>
        </li>
        <li>
          <a className="home" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="home" href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className="home" href="#contact">
            Contact
          </a>
        </li>
        <li>
          <a className="home" href="#projrcts">
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
