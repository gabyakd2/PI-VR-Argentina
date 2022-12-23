import React from "react";
import { Link } from "react-router-dom";
import "./SideNavBar.css";

export default function SideBar() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark fixed-left">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
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
            <div class="offcanvas-body">
              <ul class="nav flex-column listas">
                <li className="nav-item">
                  <a href="#introduccion">
                    <Link className="nav-link active" aria-current="page">
                      Introduccion
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#programasNesesarios">
                    <Link className="nav-link">Programas Necesarios</Link>
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
                        <Link className="dropdown-item" href="#">
                          Configuracion de SteamVR
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Config del OVR Advanced Settings
                        </Link>
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
