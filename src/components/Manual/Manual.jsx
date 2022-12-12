import React from "react";
import NavBar from "../Navbar/Navbar";
import  SideNavBar  from "../Sidebar/SideBar";
import "./manual.css";



export default function Manual() {
  return (
    <div>
      <div className="containerPriFaqs contenedor-1">
        <NavBar />

        <SideNavBar />

        <div className="container-sm mt-5 bg-dark" id="divContenedor"></div>
        <div className="container-sm mt-5 bg-dark" id="divContenedor">
          <h1 className="h1manual">Manual de usuario</h1>
          <p className="parrafoHome">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quos
            officiis, dolorum unde, vel aspernatur saepe quia impedit ex libero
            excepturi esse velit odit reiciendis voluptatum aperiam. Tenetur,
            provident recusandae! Tempora consectetur vel, modi omnis laudantium
            optio atque impedit, iste deserunt voluptatum beatae doloremque
            corrupti at. Modi esse perferendis error consequuntur unde et,
            maxime, doloribus nobis eligendi corrupti impedit velit. Iure
            quaerat architecto atque unde deleniti nemo obcaecati quod, itaque
            quisquam. Numquam sapiente nobis odit repudiandae fugit sed cum quis
            earum aspernatur dolorum, qui officia asperiores autem dolore optio
            est!
          </p>
          <p className="parrafoHome">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quos
            officiis, dolorum unde, vel aspernatur saepe quia impedit ex libero
            excepturi esse velit odit reiciendis voluptatum aperiam. Tenetur,
            provident recusandae! Tempora consectetur vel, modi omnis laudantium
            optio atque impedit, iste deserunt voluptatum beatae doloremque
            corrupti at. Modi esse perferendis error consequuntur unde et,
            maxime, doloribus nobis eligendi corrupti impedit velit. Iure
            quaerat architecto atque unde deleniti nemo obcaecati quod, itaque
            quisquam. Numquam sapiente nobis odit repudiandae fugit sed cum quis
            earum aspernatur dolorum, qui officia asperiores autem dolore optio
            est!
          </p>
        </div>
      </div>
    </div>
  );
}
