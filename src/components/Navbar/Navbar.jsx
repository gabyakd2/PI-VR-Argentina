import React from "react";
import { Link } from 'react-router-dom'
import logoPiVr from '../../imagenes/logoPiVr.png'
import './navbar.css'


export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to='/home' className="navbar-brand">
                    <img className="logo" src={logoPiVr} alt="logopivr"/>
                </Link>

                <button className="navbar-toggler"
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id='navbarSupportedContent'>
                    <ul className="navbar-nav ms-auto px-4">
                    <li className="nav-item"><Link to='/home' className="nav-link mx-4">HOME</Link></li>
                    <div class="vr bg-light"></div>
                    <li className="nav-item"><Link to='/usermanual' className="nav-link mx-4">MANUAL</Link></li>
                    <div class="vr bg-light"></div>
                    <li className="nav-item"><Link to='/faqs' className="nav-link mx-4">F3Q's</Link></li>
                    <div class="vr bg-light"></div>
                    <li className="nav-item"><Link to='/contacto' className="nav-link mx-4">CONTACTO</Link></li>
                    <div class="vr bg-light"></div>
                    <li className="nav-item"><Link to='/nosotros' className="nav-link mx-4">NOSOTROS</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}