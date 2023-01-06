import React, { useState } from "react";
import Fade from "react-bootstrap/Fade";
import NavBar from "../Navbar/Navbar";
import "./faqs.css";

export default function Faqs() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);

  return (
    <div>
      <div className="containerPriFaqs">
        <NavBar />
        <div className="container-sm mt-5 bg-dark" id="divContenedorFaqs">
          <h1 className="h1Faqs">Preguntas Frecuentes</h1>
          <div className="contenedorSeg">
            <div className="divQandA">
              {/* <h3 className="h3Faqs"> - ¿Cuál es su autonomía?</h3> */}
              <button
                className="h3Faqs"
                onClick={() => setOpen(!open)}
                aria-controls="example-fade-text"
                aria-expanded={open}
              >
                {" "}
                - ¿Cuál es su autonomía?
              </button>
              <Fade in={open}>
                <div id="example-fade-text" className="parrafoFaqs">
                  Los trackers tienen una autonomía de aproximadamente 8 hs de
                  uso continuo.
                </div>
              </Fade>
              {/* <p className="parrafoFaqs">
                Los trackers tienen una autonomía de aproximadamente 8 hs de uso
                continuo.
              </p> */}
            </div>

            <div className="divQandA">
              <button
                className="h3Faqs"
                onClick={() => setOpen2(!open2)}
                aria-controls="example-fade-text"
                aria-expanded={open2}
              >
                {" "}
                - ¿Sirve para las Oculus Quest 2?
              </button>
              <Fade in={open2}>
                <div id="example-fade-text" className="parrafoFaqs">
                  Los trackers tienen una autonomía de aproximadamente 8 hs de
                  uso continuo.
                </div>
              </Fade>
              {/* <h3 className="h3Faqs">- ¿Sirve para las Oculus Quest 2?</h3>
              <p className="parrafoFaqs">
                Sirve para cualquier headset conectado a SteamVR.
              </p> */}
            </div>

            <div className="divQandA">
              <button
                className="h3Faqs"
                onClick={() => setOpen3(!open3)}
                aria-controls="example-fade-text"
                aria-expanded={open3}
              >
                {" "}
                - ¿Por qué se requieren 5 trackers para las piernas?
              </button>
              <Fade in={open3}>
                <div id="example-fade-text" className="parrafoFaqs">
                  La razón para usar 2 trackers por pierna es que uno te da la
                  posición de cadera la rodilla y el segundo te da la posición
                  de rodilla a pie.
                </div>
              </Fade>
              {/* <h3 className="h3Faqs">
                - ¿Por qué se requieren 5 trackers para las piernas?
              </h3>
              <p className="parrafoFaqs">
                La razón para usar 2 trackers por pierna es que uno te da la
                posición de cadera la rodilla y el segundo te da la posición de
                rodilla a pie.
              </p> */}
            </div>

            <div className="divQandA">
              <button
                className="h3Faqs"
                onClick={() => setOpen4(!open4)}
                aria-controls="example-fade-text"
                aria-expanded={open4}
              >
                {" "}
                - ¿Qué diferencia hace el sexto tracker?
              </button>
              <Fade in={open4}>
                <div id="example-fade-text" className="parrafoFaqs">
                  El tracker adicional que se encuentra en el pecho te permite
                  un mejor movimiento en situaciones en donde la cadera
                  permanezca quieta y a su vez te estés encorvando. Esto se nota
                  mucho a la hora de hacer por ejemplo abdominales ya que la
                  cadera queda quieta pero el cuerpo se levanta. Otro caso en
                  donde se puede ver una mejoría es el estar acostado.
                </div>
              </Fade>
              {/* <h3 className="h3Faqs">
                - ¿Qué diferencia hace el sexto tracker?
              </h3>
              <p className="parrafoFaqs">
                El tracker adicional que se encuentra en el pecho te permite un
                mejor movimiento en situaciones en donde la cadera permanezca
                quieta y a su vez te estés encorvando. Esto se nota mucho a la
                hora de hacer por ejemplo abdominales ya que la cadera queda
                quieta pero el cuerpo se levanta. Otro caso en donde se puede
                ver una mejoría es el estar acostado.
              </p> */}
            </div>

            <div className="divQandA">
              <button
                className="h3Faqs"
                onClick={() => setOpen5(!open5)}
                aria-controls="example-fade-text"
                aria-expanded={open5}
              >
                {" "}
                - Mi internet no es muy bueno ¿Funcionará igual?
              </button>
              <Fade in={open5}>
                <div id="example-fade-text" className="parrafoFaqs">
                  No requieren buena conexión a internet en sí sino estar dentro
                  de la cobertura del router. Si tienes buena señal basta.
                </div>
              </Fade>
              {/* <h3 className="h3Faqs">
                - Mi internet no es muy bueno ¿Funcionará igual?
              </h3>
              <p className="parrafoFaqs">
                No requieren buena conexión a internet en sí sino estar dentro
                de la cobertura del router. Si tienes buena señal basta.
              </p> */}
            </div>

            <div className="divQandA">
              <button
                className="h3Faqs"
                onClick={() => setOpen6(!open6)}
                aria-controls="example-fade-text"
                aria-expanded={open6}
              >
                {" "}
                - ¿Requiere de torres para el trackeo?
              </button>
              <Fade in={open6}>
                <div id="example-fade-text" className="parrafoFaqs">
                  Los Pi-VR no requieren de torres de trackeo, permitiéndote así
                  incluso estar tapados mientras estás usándolos.
                </div>
              </Fade>
              {/* <h3 className="h3Faqs">- ¿Requiere de torres para el trackeo?</h3>
              <p className="parrafoFaqs">
                Los Pi-VR no requieren de torres de trackeo, permitiéndote así
                incluso estar tapados mientras estás usándolos.
              </p> */}
            </div>

            <div className="divQandA">
              <button
                className="h3Faqs"
                onClick={() => setOpen7(!open7)}
                aria-controls="example-fade-text"
                aria-expanded={open7}
              >
                {" "}
                - ¿Se hacen envíos al exterior?
              </button>
              <Fade in={open7}>
                <div id="example-fade-text" className="parrafoFaqs">
                  Por el momento no realizaremos envíos al exterior.
                </div>
              </Fade>
              {/* <h3 className="h3Faqs">- ¿Se hacen envíos al exterior?</h3>
              <p className="parrafoFaqs">
                Por el momento no realizaremos envíos al exterior.
              </p> */}
            </div>

            <div className="divQandA">
              <button
                className="h3Faqs"
                onClick={() => setOpen8(!open8)}
                aria-controls="example-fade-text"
                aria-expanded={open8}
              >
                {" "}
                - ¿Cuanto tarde el envío?
              </button>
              <Fade in={open8}>
                <div id="example-fade-text" className="parrafoFaqs">
                  Si es a BsAs tarda aproximadamente 5 - 7 dias, de igual forma
                  no podremos saber con exactitud ya que esto depende de la
                  empresa de transportes.
                </div>
              </Fade>
              {/* <h3 className="h3Faqs">- ¿Cuanto tarda el envio?</h3>
              <p className="parrafoFaqs">
                Si es a BsAs tarda aproximadamente 5 - 7 dias, de igual forma no
                podremos saber con exactitud ya que esto depende de la empresa
                de transportes.
              </p> */}
            </div>

            <div className="divQandA">
              <button
                className="h3Faqs"
                onClick={() => setOpen9(!open9)}
                aria-controls="example-fade-text"
                aria-expanded={open9}
              >
                {" "}
                - ¿Incluyen baterías?
              </button>
              <Fade in={open9}>
                <div id="example-fade-text" className="parrafoFaqs">
                  Si incluyen baterías recargables dentro de cada aparato, estas
                  son recargadas con una entrada micro usb y también pueden ser
                  reemplazadas.
                </div>
              </Fade>
              {/* <h3 className="h3Faqs">- ¿Incluyen baterías?</h3>
              <p className="parrafoFaqs" id="lastAns">
                Si incluyen baterías recargables dentro de cada aparato, estas
                son recargadas con una entrada micro usb y también pueden ser
                reemplazadas.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
