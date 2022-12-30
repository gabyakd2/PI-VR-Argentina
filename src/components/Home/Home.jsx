import React from "react";
import NavBar from "../Navbar/Navbar.jsx";
import TrackVisibility from 'react-on-screen';
import "./home.css";
import 'animate.css';
// import imgback from "../../imagenes/pivrbg.png";
// import SectionCarrusel from "../Carrusel/Carrusel.jsx";

export default function Home() {
  return (
    <div>
      <div className="containerPri">
        <NavBar />
          <div className="containerTitle">
            <h1 className="h1Home">PI - VR ARGENTINA</h1>
          </div>
        <div className="container-sm mt-5 pt-2 px-3 bg-dark" id="divContenedor">
          {/* <img
            src={imgback}
            alt="logoHome"
            className="img-fluid mt-3"
            id="imgHome"
          /> */}
          <div className="espacio" />
          {/* <SectionCarrusel /> */}
          <TrackVisibility>
          {
            ( { isVisible } ) =>
            <div className={isVisible ? 'animate__animated animate__backInUp' : ''}>
              <h3 className="subtitleHome mt-5 mb-3">¿ Qué es Pi-VR ?</h3>
              <p className="parrafoHome">
                Somos un emprendimiento enfocado a la venta de full body tracking
                derivados a “SlimeVR” con un año de experiencia en el mismo y con el
                objetivo de traer esta tecnología a un precio accesible a la
                Argentina. No requiere de estaciones base y funciona con cualquier
                headset el cual esté conectado a SteamVR.
              </p>
    
              <p className="parrafoHome">
                El fullbody tracking PI-VR trabaja en conjunto con el software de
                SlimeVR a la par que SteamVR; con un diseño cómodo y ajustable tanto
                para la cintura como para las piernas el cual funciona con cualquier
                tipo de headset. Uno de los beneficios de este sistema de trackeo es
                que este mismo no será obstruido por objetos que crucen cerca
                permitiendo de esta forma usarlo por ejemplo bajo la comodidad de
                estar bajo las sábanas. También como añadido ofrecemos asistencia
                técnica a través de mensaje, llamada o VRC.
              </p>
            </div>
          }
          </TrackVisibility>
        </div>
      </div>
    </div>
  );
}
