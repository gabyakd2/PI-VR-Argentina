import React from "react";
import NavBar from '../Navbar/Navbar.jsx'
import './home.css'
import logoPiVr from '../../imagenes/logoPiVr.png'

export default function Home() {
    return(
        <div>
            <div className="containerPri">
                <NavBar />
                <div className="container-sm mt-5 bg-dark" id="divContenedor">
                    <h1 className="h1Home">PI-VR</h1>
                    <img src={logoPiVr} alt="logoHome" className="img-fluid" id="imgHome"/>
                    <h3>Subtitulo</h3>
                </div>
            </div>
        </div>
    )
}