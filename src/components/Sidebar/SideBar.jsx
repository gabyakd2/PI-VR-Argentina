import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./SideNavBar.module.css";

export default function SideBar({
  introduccion,
  programs,
  slimeserver,
  ovr,
  primeruso,
  configsteamvr,
  confiovr,
  closeMenu,
  ul,
}) {
  const navBarRef = useRef();
  const scrollToSeccion = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const values = [
    {
      id: 1,
      text: "Introduccion",
      scrollTo: introduccion,
      active: "introduccion",
    },
    {
      id: 2,
      text: "Programas Necesarios",
      scrollTo: programs,
      active: "programasNesesarios",
    },
    {
      id: 3,
      text: "Primer uso",
      scrollTo: primeruso,
      active: "PrimerosPasos",
    },
    {
      id: 4,
      text: "Configuración SteamVr",
      scrollTo: configsteamvr,
      active: "confiSteamVr",
    },
    {
      id: 5,
      text: "OVR Advanced Settings",
      scrollTo: confiovr,
      active: "configOvr",
    },
  ];

  const [sectionActive, setsectionActive] = useState(null);

  const handleScroll = useCallback(() => {
    let current = "";
    const section = document.querySelectorAll(`section`);
    section.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
        setsectionActive(current);
        // console.log("estas en", current);
      }
    });
  }, [setsectionActive]);
  const nav = useRef();

  useEffect(() => {
    window.addEventListener("scroll", function () {
      nav.current.classList.toggle(style.sticky, window.scrollY > 150);
    });
    // closeMenu && ul.current.classList.remove(style.openSidebar);
    window.addEventListener("scroll", handleScroll);
    !sectionActive && setsectionActive("introduccion");
  }, [closeMenu, handleScroll, sectionActive]);

  return (
    <>
      <i
        ref={nav}
        onClick={() => ul.current.classList.add(style.openSidebar)}
        className={`fas fa-bars ${style.icon} ${style.iconOpen}`}
      ></i>
      <div className={` ${style.menu}`}>
        <ul className={` ${style.listas}`} ref={ul}>
          <i
            className={`fas fa-times ${style.icon} ${style.iconClose}`}
            onClick={() => ul.current.classList.remove(style.openSidebar)}
          ></i>

          {values?.map((e) => {
            return (
              <li
                key={e.id}
                onClick={() => {
                  scrollToSeccion(e.scrollTo);
                }}
                // ref={e.ref}
              >
                <p
                  className={
                    e.active === sectionActive ? style.active : style.link
                  }
                >
                  {e.text}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <Offcanvas.Header
            className="offcanvas offcanvas-start text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <Offcanvas.Header className="o">
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
              ></button>
            </Offcanvas.Header>
            <div className="offcanvas-body" id="sidebarContainer">
              <ul className="nav flex-column listas">
                <li
                  className="nav-item"
                  onClick={() => scrollToSeccion(introduccion)}
                >
                  Introduccion
                </li>
                <li
                  className="nav-item"
                  onClick={() => scrollToSeccion(programs)}
                >
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
          </Offcanvas.Header> */}
    </>
  );
}
