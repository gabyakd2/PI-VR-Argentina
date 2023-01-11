import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./SideNavBar.css";

export default function SideBar({
  introduccion,
  programs,
  slimeserver,
  ovr,
  primerospasos,
  configsteamvr,
  confiovr
}) {
  const navBarRef = useRef();

  const scrollToSeccion = (elementRef) => {
    window.scrollTo({
      top: navBarRef
        ? elementRef.current.offsetTop - navBarRef.current?.clientHeight
        : elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark" ref={navBarRef}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body" id="sidebarContainer">
              <ul className="nav flex-column listas">
                <li className="nav-item" onClick={() => scrollToSeccion(introduccion)}>
                  <a
                    href="#introduccion"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Introduccion
                  </a>
                </li>
                <li className="nav-item" onClick={() => scrollToSeccion(programs)}>
                  <a
                    href="#programasNesesarios"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Programas Necesarios
                  </a>
                </li>
                <li className="nav-item">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Primeros Pasos
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark">
                      <li>
                        <a href="#confiSteamVr" className="dropdown-item">
                          Configuracion de SteamVR
                        </a>
                      </li>
                      <li>
                        <a href="#configOvr" className="dropdown-item">
                          Config del OVR Advanced Settings
                        </a>
                      </li>
                    </ul>
                  </li>
                </li>
                <li className="nav-item">
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      SetUp
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark lista">
                      <li>
                        <Link className="dropdown-item" href="#">
                          Colocación
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Calibración
                        </Link>
                      </li>
                    </ul>
                  </li>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Problemas comunes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
