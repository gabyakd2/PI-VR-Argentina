import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
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

  const expand = 'xxl'
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
      <Navbar className="bg-dark" ref={navBarRef}>
        <Container>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                TITULO
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              
        
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
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body" id="sidebarContainer">
              <Nav className="nav flex-column listas">
                <Nav.Link className="nav-item" onClick={() => scrollToSeccion(introduccion)}>
                    Introduccion
                </Nav.Link>
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
              </Nav>
            </div>
          </div>
          </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}
