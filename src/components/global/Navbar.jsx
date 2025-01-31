import React from "react";
import logo from "../../assets/logo/logo-main.png";
import { Link } from "react-router";
import { LuChevronDown } from "react-icons/lu";

const Navbar = () => {
  return (
    <header >
      <nav
        className="navbar navbar-expand-lg px-3 py-lg-1 px-xl-5"
        aria-label="Offcanvas navbar large"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="esn-logo" id="esn-main-logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex={-1}
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
                ESN
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    ABOUT
                    <LuChevronDown id="chevron"/>
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/esn-azerbaijan" className="drop-link">ESN AZERBAIJAN</Link></li>
                    <li><Link to="/about/team" className="drop-link">Team</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/forStudents" className="nav-link">
                    FOR STUDENTS
                    <LuChevronDown id="chevron"/>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/media" className="nav-link">
                    MEDIA
                    <LuChevronDown id="chevron"/>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects" className="nav-link">
                    PROJECTS
                    <LuChevronDown id="chevron"/>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/externalRelations" className="nav-link">
                    EXTERNAL RELATIONS
                    <LuChevronDown id="chevron"/>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link">
                    BLOGS
                    <LuChevronDown id="chevron"/>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/nationalEvents" className="nav-link">
                    NATIONAL EVENTS
                    <LuChevronDown id="chevron"/>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
