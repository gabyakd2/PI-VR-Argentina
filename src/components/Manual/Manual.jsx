import React, { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import SideNavBar from "../Sidebar/SideBar";
import dwlpdf from "../../imagenes/logopdf.png";
import flecha from "../../imagenes/flechafija.png";
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./manual.module.css";
import style from "../Sidebar/SideNavBar.module.css";

export default function Manual() {
  const introduccion = useRef();
  const programs = useRef();
  const slimeserver = useRef();
  const ovr = useRef();
  const primeruso = useRef();
  const configsteamvr = useRef();
  const confiovr = useRef();

  const ul = useRef(null);


  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  const [ viewArrow, setViewArrow ] = useState(false)

  const handleViewArrow = () => {
    if (window.scrollY >= 1500) {
      setViewArrow(true)
    } else {
      setViewArrow(false)
    }
  }

  window.addEventListener('scroll', handleViewArrow)

  return (
    <div className={styles.containerManual}>
      {/* <SideNavBar
        ul={ul}
        introduccion={introduccion}
        programs={programs}
        slimeserver={slimeserver}
        ovr={ovr}
        primeruso={primeruso}
        configsteamvr={configsteamvr}
        confiovr={confiovr}
        closeMenu={closeMenu}
      /> */}
      <section
        className={style.sectionOffSidebar}
        onClick={() => {
          // setCloseMenu(!closeMenu);
          ul.current.classList.remove(style.openSidebar);
        }}
      >
        <div
          className={`container-sm mt-5 bg-dark ${styles.divContenedor}`}
          data-aos="zoom-in-up"
        >
          <h1 className={styles.h1manual} id="principio">
            Manual de usuario
          </h1>
          <section ref={introduccion} id="introduccion">
            <h2 className={styles.subtitulo}>Introducción</h2>
            <p className={styles.parrafoHome}>
              En esta guía les explicaremos cómo configurar correctamente sus
              trackers Pi-VR, el mismo estará dividido en tres partes: la
              primera será para cuando adquieran los trackers por primera vez,
              la segunda parte les servirá para colocarlos rápidamente cada vez
              que quieran utilizarlos, y la tercera parte la cual es opcional
              son distintas configuraciones las cuales con un poco más de tiempo
              mejorarán su experiencia de uso.
            </p>
          </section>

          <section ref={programs} id="programasNesesarios">
            <h2 className={styles.subtitulo}>Programas necesarios:</h2>
            <p className={styles.parrafoHome}>
              SteamVR: Requisado para el funcionamiento del sistema full body
              tracking en sus aplicaciones.
            </p>
          </section>

          <section ref={slimeserver} id="SlimeServer">
            <h4 className={styles.h4}>SlimeVR Server:</h4>
            <p className={styles.parrafoHome}>
              Permite la configuración y uso de los trackers, esta aplicación
              deberá estar abierta para que los trackers Pi-VR sean captados por
              SteamVR. Esta aplicación se puede descargar haciendo click en el
              siguiente botón:{" "}
            </p>
            <a
              className={styles.buttonADesc}
              href="https://github.com/SlimeVR/SlimeVR-Installer/releases/latest/download/slimevr_web_installer.exe"
            >
              <h6>DESCARGA</h6>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="110"
                height="110"
                fill="currentColor"
                className="bi bi-cloud-arrow-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z" />
              </svg>
            </a>
          </section>

          <section ref={ovr} id="ovr">
            <h4 className={styles.h4}>OVR Advanced Settings:</h4>
            <p className={styles.parrafoHome}>
              Permite la calibración de los trackers desde dentro del juego con
              un simple botón configurable. Este mismo se descarga buscando la
              aplicación dentro de la tienda de Steam.
            </p>
          </section>

          <section ref={primeruso} id="PrimerosPasos">
            <h2 className={styles.subtitulo}>Primer uso</h2>
            <h4 className={styles.h4}>
              Configuración dentro de SlimeVR Server:
            </h4>
            <br />
            <p className={styles.parrafoHome}>
              Tras descargar e instalar el programa de “SlimeVR Server” deberán
              de abrir el archivo llamado “slimevr-ui.exe” que se encuentra
              dentro de la carpeta donde se instaló el mismo (pueden acceder a
              esa carpeta apretando segundo clic en el acceso directo del
              escritorio creado tras la instalación y seleccionando “abrir la
              ubicación del archivo”). Recomendamos crear un acceso directo del
              archivo y llevarlo al escritorio para fácil acceso. Tras abrirlo
              lo primero que podrán ver es esta pestaña en la cual deberán
              apretar “Lets start setup!”:
            </p>
            <img
              id="img"
              className={`${styles.imgManual} img-fluid`}
              src="https://cdn.discordapp.com/attachments/1044263688804245604/1053312090875625583/image_1.png"
              alt="img"
            />
            <p className={styles.parrafoHome}>
              En la siguiente pestaña les tocará colocar los datos de su red
              Wifi. Tengan extremo cuidado de no confundirse en mayúsculas y
              minúsculas al escribir estos datos, deberán estar escritos a la
              perfección.
            </p>
            <p className={styles.parrafoHome}>
              A continuación, podrán ver esta pestaña donde tendrán que conectar
              los trackers de forma individual hasta tener los 6 trackers en el
              menú. Se proseguirá con el botón de “I connected all my trackers”:
            </p>
            <img
              id="img"
              className={`${styles.imgManual} img-fluid`}
              src="https://cdn.discordapp.com/attachments/1044263688804245604/1053313262252470392/image_2.png"
              alt="img"
            />
            <p className={styles.parrafoHome}>
              A esto le prosigue seleccionar en que parte del cuerpo desean
              tener cada uno de los trackers, para lo cual deberán prenderlos a
              todos y seleccionar las siguientes casillas:
            </p>
            <img
              id="img"
              className={`${styles.imgManual} img-fluid`}
              src="https://cdn.discordapp.com/attachments/1044263688804245604/1053313619124818011/image_3.png"
              alt="img"
            />
            <p className={styles.parrafoHome}>
              Chest: Pecho
              <br /> Hip: Cadera
              <br /> Right/Left Upper Leg: Muslo derecho/izquierdo
              <br /> Right/Left Lower Leg: Tobillo derecho/izquierdo
            </p>
          </section>

          <section ref={configsteamvr} id="confiSteamVr">
            <h2 className={styles.subtitulo}>Configuración SteamVr:</h2>
            <p className={styles.parrafoHome}>
              Hecho todo esto, sin cerrar “SlimeVR Server”, deberán abrir
              “SteamVR”. Podrán ver cómo les aparecerá aparte del headset unos 3
              hexágonos de color grises los cuales representan los trackers.
            </p>
            <p className={styles.parrafoHome}>
              Hecho todo esto, sin cerrar “SlimeVR Server”, deberán abrir
              “SteamVR”. Podrán ver cómo les aparecerá aparte del headset unos 3
              hexágonos de color grises los cuales representan los trackers.
            </p>
            <img
              id="img"
              className={`${styles.imgManual} img-fluid`}
              src="https://cdn.discordapp.com/attachments/1044263688804245604/1053314810147786894/image_4.png"
              alt="img"
            />
            <p className={styles.parrafoHome}>
              <b>
                {" "}
                Vayan a la esquina superior izquierda y aprieten las tres rayas
                horizontales, de ahí hagan clic a ajustes, luego
              </b>{" "}
              en la sección de <b>mandos</b> podrán ver el apartado de{" "}
              <b>administrar vive trackers</b> al cual deberán{" "}
              <b> ingresar “pie izquierdo”</b> donde está “left foot”,
              <b> “pie derecho”</b> donde está “right foot” y <b> “cintura”</b>{" "}
              donde está “waist”:
            </p>
            <img
              id="img"
              className={`${styles.imgManual} img-fluid`}
              src="https://cdn.discordapp.com/attachments/1044263688804245604/1053316032485392506/image_5.png"
              alt="img"
            />
          </section>

          <section ref={confiovr} id="configOvr">
            <h2 className={styles.subtitulo}>
              Configuración del OVR Advanced Settings
            </h2>
            <p className={styles.parrafoHome}>
              La configuración del OVR Advanced Settings sirve para calibrar los
              trackers rápidamente si en algún momento no están en la posición
              que deberían.
              <br />
              <br />
              Lo primero que deberán hacer es{" "}
              <b> localizar la carpeta de “roaming”</b> de la computadora, a la
              cual{" "}
              <b>
                {" "}
                pueden acceder desde el buscador de windows al escribir
                “%appdata%”:
              </b>
            </p>
            <img
              id="img"
              className={`${styles.imgManual} img-fluid`}
              src="https://cdn.discordapp.com/attachments/1044263688804245604/1053317385358147674/image_6.png"
              alt="img"
            />
            <p className="parrofoHome">
              Dentro de roaming podrán ver una carpeta llamada
              “AdvancedSettings-Team” la cual tiene 2 archivos, a lo que deberán
              abrir el archivo llamado “OVR Advanced Settings.ini” con cualquier
              editor de texto. Al bajar el texto encontrarán una sección llamada
              “[keyboardShortcuts]” a la cual le deberán modificar los
              siguientes dos valores:
            </p>
            <p className={styles.keyboard}>keyboardOne=^y</p>
            <p className={styles.keyboard}>keyboardTwo=^u</p>
            <p className={styles.parrafoHome}>
              Guardan el archivo y de ahí al finalizar se verá de la siguiente
              forma:
            </p>

            <img
              className="img-fluid mb-5"
              src="https://cdn.discordapp.com/attachments/1044263688804245604/1053323728316018779/image_7.png"
              alt="img"
            />
            <p className={styles.parrafoHome}>
              Hecho esto deberán conectar el headset y abrir la aplicación de
              “SteamVR” junto con “OVR Advanced Settings”. Al estar dentro se
              prosigue apretando el botón designado para abrir el menú de
              “SteamVR”, dentro del cual podrán ver un nuevo botón en la parte
              inferior con el logo de OVR al cual deberán entrar.
            </p>
            <img
              id="img"
              className={`${styles.imgManual} img-fluid mb-5`}
              src="https://cdn.discordapp.com/attachments/1044263688804245604/1053323965449379901/image_8.png"
              alt="img"
            />
            <br />
            <img
              id="img"
              className={`${styles.imgManual} img-fluid`}
              src="https://cdn.discordapp.com/attachments/1044263688804245604/1053324160669057065/image_9.png"
              alt="img"
            />
            <p className={styles.parrafoHome}>
              Podrán ver diversos apartados a la izquierda de los cuales
              tendremos que entrar al apartado de “Bindings” el cual al esperar
              unos segundos les mostrará un menú dentro del cual lo siguiente
              será hacer clic en la pestaña de “Misc” y buscar el botón que
              deseen usar para calibrar el personaje (recomendamos que usen un
              botón como por ejemplo el del muteo en juegos multijugador, en
              nuestro caso usaremos el botón “X” de los headset meta ya que es
              el botón de muteo de “VRChat”). Se prosigue apretando “+” y
              seleccionando “botón” como método de entrada. Al haber hecho esto
              podrán ver cómo les aparece una nueva sección donde podrá
              configurar qué hará ese botón, a lo que deberemos apretar en donde
              dice “avanzado” para tener acceso a “Doble” y “Largo” en los
              cuales elegimos “Keyboard Shortcut One” y “Keyboard Shortcut Two”
              respectivamente.
            </p>
            <img
              id="img"
              className={`${styles.imgManual} img-fluid`}
              src="https://cdn.discordapp.com/attachments/1044263688804245604/1053324713004367902/image_10.png"
              alt="img"
            />
            <p className={styles.parrafoHome}>
              Habiendo configurado esto podrán apretar el botón “X” del mando
              izquierdo dos veces seguidas para hacer una calibración a modo
              “pose T”. También podrán mantener apretado el mismo botón para
              centrar todos los trackers a que miren al frente (a la dirección a
              la que esté mirando el headset) lo cual les podrá servir en
              momentos en donde estén sentados o acostados.
              <br /> Con esto habremos finalizado la configuración básica de las
              PiVR. Si desean mejorar la calidad del traqueo pueden proseguir a
              la siguiente guía (WIP) en la cual se les explicará cómo
              configurar los huesos junto con algunos otros tips.
            </p>
          </section>
          <section>
            <h3 className={styles.dwmanual}>¿Querés descargar el manual?</h3>
            <a
              className={styles.buttonApdf}
              href="https://drive.google.com/file/d/13A06ZI7wZyln6Mw2rrixe3Kvs8LsZ47X/view"
            >
              <div className="d-flex justify-content-center">
                <h6 className="mt-4">DESCARGA</h6>
                <img
                  src={dwlpdf}
                  alt="logo pdf"
                  className={` ${styles.imgpdf} img-fluid`}
                />
              </div>
            </a>
          </section>
        </div>
      </section>
      <a href="#principio">
        <img
          src={flecha}
          alt="boton subir"
          data-aos="zoom-in-up"
          className={viewArrow ? `${styles.buttonArrow}` : null }
        />
      </a>
    </div>
  );
}
