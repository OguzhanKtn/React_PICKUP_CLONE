import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#fcdf35" }}>
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <h2 style={{ marginBottom: 10 }}>
              <span style={{ fontWeight: "bold" }}>PICK</span>
              <span style={{ fontStyle: "italic" }}>UP</span>
            </h2>
          </NavLink>

          {/* Hamburger Menüsü */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menü Seçenekleri */}
          <div className="collapse navbar-collapse gap-5" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/ourvehicle" className="nav-link">
                  OUR VEHICLE
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/package" className="nav-link">
                  PACKAGE
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/passengerfeed" className="nav-link">
                  PASSENGER FEED
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  CONTACT
                </NavLink>
              </li>

              {/* Dropdown Menü */}
              <li className="nav-item dropdown">
                <button
                  className="btn custom-btn dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  PAGES
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            {/* Sağ Taraf İçerikleri */}
            <div className="d-flex align-items-center gap-3">
              <span className="badge text-bg-light me-3">
                <i className="bi bi-headphones" style={{ fontSize: "1rem" }} />
                00 123 456 789
              </span>
              <a href="https://www.facebook.com/" target="_blank" className="me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" className="me-3">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.twitter.com/" target="_blank">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
