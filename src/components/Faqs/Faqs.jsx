import React, { useEffect } from "react";
import Aos from "aos";
import flecha from "../../imagenes/flechafija.png";
import 'aos/dist/aos.css'
import "./faqs.css";
import { useState } from "react";

export default function Faqs() {

  useEffect(() => {
    Aos.init({duration:1000})
  })

  const [ viewArrow, setViewArrow ] = useState(false)

  const handleViewArrow = () => {
    if (window.scrollY >= 1000) {
      setViewArrow(true)
    } else {
      setViewArrow(false)
    }
  }

  window.addEventListener('scroll', handleViewArrow)

  return (
    <div>
      <div className="containerPriFaqs" id="principio">
        <div className="container-sm mt-5 mb-5 bg-dark" id="divContenedorFaqs" data-aos="zoom-in-up">
          <h1 className="h1Faqs">Preguntas Frecuentes</h1>
          <div className="contenedorSeg">
            <div className="divQandA" data-aos="fade-up" data-aos-duration="500">
              <h3 className="h3Faqs"> - ¿Cuál es su autonomía?</h3>
              <p className="parrafoFaqs" >
                Los trackers tienen una autonomía de aproximadamente 8 hs de uso
                continuo.
              </p>
            </div>

            <div className="divQandA" data-aos="fade-up" data-aos-duration="500">
              <h3 className="h3Faqs">- ¿Sirve para las Oculus Quest 2?</h3>
              <p className="parrafoFaqs">
                Sirve para cualquier headset conectado a SteamVR.
              </p>
            </div>

            <div className="divQandA" data-aos="fade-up" data-aos-duration="500">
              <h3 className="h3Faqs" >
                - ¿Por qué se requieren 5 trackers para las piernas?
              </h3>
              <p className="parrafoFaqs">
                La razón para usar 2 trackers por pierna es que uno te da la
                posición de cadera la rodilla y el segundo te da la posición de
                rodilla a pie.
              </p>
            </div>

            <div className="divQandA" data-aos="fade-up" data-aos-duration="500">
              <h3 className="h3Faqs">
                - ¿Qué diferencia hace el sexto tracker?
              </h3>
              <p className="parrafoFaqs">
                El tracker adicional que se encuentra en el pecho te permite un
                mejor movimiento en situaciones en donde la cadera permanezca
                quieta y a su vez te estés encorvando. Esto se nota mucho a la
                hora de hacer por ejemplo abdominales ya que la cadera queda
                quieta pero el cuerpo se levanta. Otro caso en donde se puede
                ver una mejoría es el estar acostado.
              </p>
            </div>

            <div className="divQandA" data-aos="fade-up" data-aos-duration="500">
              <h3 className="h3Faqs">
                - Mi internet no es muy bueno ¿Funcionará igual?
              </h3>
              <p className="parrafoFaqs">
                No requieren buena conexión a internet en sí sino estar dentro
                de la cobertura del router. Si tienes buena señal basta.
              </p>
            </div>

            <div className="divQandA" data-aos="fade-up" data-aos-duration="500">
              <h3 className="h3Faqs">- ¿Requiere de torres para el trackeo?</h3>
              <p className="parrafoFaqs">
                Los Pi-VR no requieren de torres de trackeo, permitiéndote así
                incluso estar tapados mientras estás usándolos.
              </p>
            </div>

            <div className="divQandA" data-aos="fade-up" data-aos-duration="500">
              <h3 className="h3Faqs">- ¿Se hacen envíos al exterior?</h3>
              <p className="parrafoFaqs">
                Por el momento no realizaremos envíos al exterior.
              </p>
            </div>

            <div className="divQandA" data-aos="fade-up" data-aos-duration="500">
              <h3 className="h3Faqs">- ¿Cuanto tarda el envio?</h3>
              <p className="parrafoFaqs">
                Si es a BsAs tarda aproximadamente 5 - 7 dias, de igual forma no
                podremos saber con exactitud ya que esto depende de la empresa
                de transportes.
              </p>
            </div>

            <div className="divQandA" data-aos="fade-up" data-aos-duration="500">
              <h3 className="h3Faqs">- ¿Incluyen baterías?</h3>
              <p className="parrafoFaqs" id="lastAns">
                Si incluyen baterías recargables dentro de cada aparato, estas
                son recargadas con una entrada micro usb y también pueden ser
                reemplazadas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <a href="#principio" className="position-fixed">
        <img
          src={flecha}
          alt="boton subir"
          data-aos="zoom-in-up"
          className={viewArrow ? 'buttonArrow' : null }
        />
      </a>
    </div>
  );
}
