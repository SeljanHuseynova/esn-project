import React from "react";
import logo from "../../assets/logo/logo-main.png";
import { Link } from "react-router";
import { LuChevronDown } from "react-icons/lu";

const Navbar = () => {
  return (
    <header>
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
                    <LuChevronDown id="chevron" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/esn-azerbaijan" className="drop-link">
                        ESN AZERBAIJAN
                      </Link>
                    </li>
                    <li>
                      <Link to="/board-members" className="drop-link">
                        BOARD MEMBERS
                      </Link>
                    </li>
                    <li>
                      <Link to="/board-members-supporter" className="drop-link">
                        BOARD MEMBERS SUPPORTER
                      </Link>
                    </li>
                    <li>
                      <Link to="/national-assembly" className="drop-link">
                        NATIONAL ASSEMBLY
                      </Link>
                    </li>
                    <li>
                      <Link to="/esn-ada-baku" className="drop-link">
                        ESN ADA BAKU
                      </Link>
                    </li>
                    <li>
                      <Link to="/how-to-become-a-section" className="drop-link">
                        HOW TO BECOME A SECTION?
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    FOR STUDENTS
                    <LuChevronDown id="chevron" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to="/erasmus-generation-portal"
                        className="drop-link"
                      >
                        ERASMUS GENERATION PORTAL
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/european-solidarity-corps"
                        className="drop-link"
                      >
                        EUROPEAN SOLIDARITY CORPS
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/get-your-membership-card"
                        className="drop-link"
                      >
                        GET YOUR MEMBERSHIP CARD
                      </Link>
                    </li>
                    <li>
                      <Link to="/how-participate-erasmus" className="drop-link">
                        HOW TO PARTICIPATE IN ERASMUS+?
                      </Link>
                    </li>
                    <li>
                      <Link to="/join-esn-azerbaijan" className="drop-link">
                        JOIN ESN AZERBAIJAN!
                      </Link>
                    </li>
                    <li>
                      <Link to="/study-azerbaijan" className="drop-link">
                        STUDY IN AZERBAIJAN
                      </Link>
                    </li>
                    <li>
                      <Link to="/survival-guide" className="drop-link">
                        SURVIVAL GUIDE
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    MEDIA
                    <LuChevronDown id="chevron" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/news" className="drop-link">
                        LATEST NEWS
                      </Link>
                    </li>
                    <li>
                      <Link to="/media-kit" className="drop-link">
                        MEDIA KIT
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link to="/project-cards" className="nav-link">
                    PROJECTS
                    <LuChevronDown id="chevron" />
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/project1" className="drop-link">
                      CreARTivity
                      </Link>
                    </li>
                    <li>
                      <Link to="/project2" className="drop-link">
                      ISYOP
                      </Link>
                    </li>
                    <li>
                      <Link to="/project3" className="drop-link">
                      Youth Workers Exchange Program
                      </Link>
                    </li>
                    <li>
                      <Link to="/project4" className="drop-link">
                      Erasmus: A Complete Guide
                      </Link>
                    </li>
                  </ul>

                </li>
                <li className="nav-item">
                  <Link to="/external-relations" className="nav-link">
                    EXTERNAL RELATIONS
                    <LuChevronDown id="chevron" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    BLOGS
                    <LuChevronDown id="chevron" />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    NATIONAL EVENTS
                    <LuChevronDown id="chevron" />
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
