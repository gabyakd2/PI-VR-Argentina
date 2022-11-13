import React from "react";
import NavBar from "../Navbar/Navbar";
import './manual.css'


export default function Manual() {
    return(
        <div>
            <div className="containerPriFaqs">
                <NavBar />
                <div className="container bg-dark mt-5" id="divContenedorFaqs">
                    <h1 className="h1manual">Manual de usuario</h1>
                    
                </div>
            </div>
        </div>
    )
}