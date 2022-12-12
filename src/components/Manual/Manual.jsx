import React from "react";
import NavBar from "../Navbar/Navbar";
import "./manual.css";
import { Link } from "react-router-dom";
// import hamburguesa from "../../imagenes/hamburguesa.png";

export default function Manual() {
  return (
    <div className="containerPriFaqs">
      <NavBar />
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-#212529 p-4">
          <div className="container-fluid">
            <ul class="nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  Introduccion
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Programas Necesarios
                </Link>
              </li>
              <li className="nav-item">
                <button
                  class="btn btn-secondary dropdown-toggle estilos"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Primeros Pasos
                </button>
                <ul class="dropdown-menu segundo">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Configuracion de SteamVR
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Configuración del OVR Advanced Settings
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Colocación
                    </Link>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Calibración
                      </Link>
                    </li>
                  </li>
                </ul>
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
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div className="container-sm mt-5 bg-dark" id="divContenedor"></div>
      <div className="container-sm mt-5 bg-dark" id="divContenedor">
        <h1 className="h1manual">Manual de usuario</h1>
        <p className="parrafoHome">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quos
          officiis, dolorum unde, vel aspernatur saepe quia impedit ex libero
          excepturi esse velit odit reiciendis voluptatum aperiam. Tenetur,
          provident recusandae! Tempora consectetur vel, modi omnis laudantium
          optio atque impedit, iste deserunt voluptatum beatae doloremque
          corrupti at. Modi esse perferendis error consequuntur unde et, maxime,
          doloribus nobis eligendi corrupti impedit velit. Iure quaerat
          architecto atque unde deleniti nemo obcaecati quod, itaque quisquam.
          Numquam sapiente nobis odit repudiandae fugit sed cum quis earum
          aspernatur dolorum, qui officia asperiores autem dolore optio est!
        </p>
        <p className="parrafoHome">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quos
          officiis, dolorum unde, vel aspernatur saepe quia impedit ex libero
          excepturi esse velit odit reiciendis voluptatum aperiam. Tenetur,
          provident recusandae! Tempora consectetur vel, modi omnis laudantium
          optio atque impedit, iste deserunt voluptatum beatae doloremque
          corrupti at. Modi esse perferendis error consequuntur unde et, maxime,
          doloribus nobis eligendi corrupti impedit velit. Iure quaerat
          architecto atque unde deleniti nemo obcaecati quod, itaque quisquam.
          Numquam sapiente nobis odit repudiandae fugit sed cum quis earum
          aspernatur dolorum, qui officia asperiores autem dolore optio est!
        </p>
      </div>
    </div>
  );
}
