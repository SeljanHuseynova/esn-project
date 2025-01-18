import React from "react";
import logo from "../../assets/logo/logo-main.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="px-3  mx-lg-2 py-lg-1 px-xl-5">  
      <nav
        className="navbar navbar-expand-lg"
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
                  <Link to="/" className="nav-link"> ABOUT</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    FOR STUDENTS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    MEDIA
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    PROJECTS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    EXTERNAL RELATIONS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    BLOG
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    NATIONAL EVENTS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CONTACT
                  </a>
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
