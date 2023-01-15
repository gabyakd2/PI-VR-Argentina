import React from "react";
import { Link } from "react-router-dom";
import logoPiVr from "../../imagenes/logoPiVr.png";
import "./navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark nav">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img className="logo" src={logoPiVr} alt="logopivr" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto px-4">
            <li className="nav-item">
              <Link to="/" className="nav-link mx-4" id="letra">
                HOME
              </Link>
            </li>
            <div className="vr bg-light"></div>
            <li className="nav-item">
              <Link to="/media" className="nav-link mx-4" id="letra">
                FOTOS Y VIDEOS
              </Link>
            </li>
            <div className="vr bg-light"></div>
            <li className="nav-item">
              <Link to="/usermanual" className="nav-link mx-4" id="letra">
                MANUAL
              </Link>
            </li>
            <div className="vr bg-light"></div>
            <li className="nav-item">
              <Link to="/faqs" className="nav-link mx-4" id="letra">
                FAQ's
              </Link>
            </li>
            <div className="vr bg-light"></div>
            <li className="nav-item">
              <Link to="/contact" className="nav-link mx-4" id="letra">
                CONTACTO
              </Link>
            </li>
            <div className="vr bg-light"></div>
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
