import React from "react";
import NavBar from "../Navbar/Navbar";
import "./manual.css";

export default function Manual() {
  return (
    <div>
      <div className="containerPriFaqs">
        <NavBar />
        <div className="container bg-dark mt-5" id="divContenedorFaqs">
          <h1 className="h1manual">Manual de usuario</h1>
          <input type="checkbox" className="checkbox" id="check" />
      <label className="menu" htmlFor="check">
        |||
      </label>
      <div className="left-panel">
        <ul>
          <a href="#">
            <li>Introducción</li>
          </a>
          <a href="#">
            <li>Programas necesarios</li>
          </a>
          <a href="#">
            <li>Primeros pasos</li>
          </a>
          <a href="#">
            <li>Configuracion de SteamVR</li>
          </a>
        </ul>
      </div>
        </div>
      </div>
      
    </div>
  );
}
