import React from "react";
import { Link } from "react-router-dom";
import "./SideNavBar.css";

export default function SideBar() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-start text-bg-dark"
            tabindex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div class="offcanvas-header">
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body" id="sidebarContainer">
              <ul class="nav flex-column listas">
                <li className="nav-item">
                  <a href="#introduccion" className="nav-link active" aria-current="page">
                      Introduccion
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#programasNesesarios" className="nav-link active" aria-current="page">
                    Programas Necesarios
                  </a>
                </li>
                <li className="nav-item">
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Primeros Pasos
                    </Link>
                    <ul class="dropdown-menu dropdown-menu-dark">
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
                  <li class="nav-item dropdown">
                    <Link
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      SetUp
                    </Link>
                    <ul class="dropdown-menu dropdown-menu-dark lista">
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
