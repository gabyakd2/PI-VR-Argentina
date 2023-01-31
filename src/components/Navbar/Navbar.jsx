import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logoPiVr from "../../imagenes/logoPiVr.png";
import "./navbar.css";

export default function NavBar() {

  const collap = useRef(); 

  const handleHidden = () => {
    collap.current.classList.remove("show");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav containerNavbar">
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={collap}>
          <ul className="navbar-nav ms-auto px-4">
            <li className="nav-item">
              <Link to="/" className="nav-link mx-4" id="letra" onClick={handleHidden}>
                HOME
              </Link>
            </li>
            <div className="vr bg-light linea"></div>
            <li className="nav-item">
              <Link to="/usermanual" className="nav-link mx-4" id="letra" onClick={handleHidden}>
                MANUAL
              </Link>
            </li>
            <div className="vr bg-light linea"></div>
            <li className="nav-item">
              <Link to="/faqs" className="nav-link mx-4" id="letra" onClick={handleHidden}>
                FAQ's
              </Link>
            </li>
            <div className="vr bg-light linea"></div>
            <li className="nav-item">
              <Link to="/catalogue" className="nav-link mx-4" id="letra" onClick={handleHidden}>
                PRODUCTOS
              </Link>
            </li>
            <div className="vr bg-light linea"></div>
            <li className="nav-item">
              <Link to="/contact" className="nav-link mx-4" id="letra" onClick={handleHidden}>
                CONTACTO
              </Link>
            </li>
            <div className="vr bg-light linea"></div>
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
