import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import style from "./home.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ReactPlayer from "react-player";
import SectionCarrusel from "../Carrusel/Carrusel";
import trackhome from "../../imagenes/trackpivrhome.png";
import exthome from "../../imagenes/pivrexthome.png";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div className={style.containerPri}>
        <div
          className={style.containerTitle}
          data-aos="zoom-up"
          data-aos-duration="4000"
        >
          <h1 className={style.h1Home}>PI - VR ARGENTINA</h1>
        </div>
        {/* <div className="container mt-5 pt-2" id="divContenedor">
          <div data-aos="fade-up" data-aos-duration="1000" className="containerHomeQe">
            <h3 className="subtitleHome mt-3 mb-5">¿ Qué es Pi-VR ?</h3>
            <p className="parrafoHome">
              Somos un emprendimiento enfocado a la venta de full body tracking
              derivados a “SlimeVR” con un año de experiencia en el mismo y con
              el objetivo de traer esta tecnología a un precio accesible a la
              Argentina. No requiere de estaciones base y funciona con cualquier
              headset el cual esté conectado a SteamVR.
            </p>

            <p className="parrafoHome">
              El fullbody tracking PI-VR trabaja en conjunto con el software de
              SlimeVR a la par que SteamVR; con un diseño cómodo y ajustable
              tanto para la cintura como para las piernas el cual funciona con
              cualquier tipo de headset. Uno de los beneficios de este sistema
              de trackeo es que este mismo no será obstruido por objetos que
              crucen cerca permitiendo de esta forma usarlo por ejemplo bajo la
              comodidad de estar bajo las sábanas. También como añadido
              ofrecemos asistencia técnica a través de mensaje, llamada o VRC.
            </p>
          </div>
        </div> */}
        <Container className="mt-5">
          <Row>
            <Col md={6} className="mt-5">
              <h3 className={`${style.subtitleHome} mb-3`}>¿Quienes somos?</h3>
              <p className={style.parrafoHome}>
                Somos un emprendimiento enfocado a la venta de full body
                tracking derivados a “SlimeVR” con un año de experiencia en el
                mismo y con el objetivo de traer esta tecnología a un precio
                accesible a la Argentina. No requiere de estaciones base y
                funciona con cualquier headset el cual esté conectado a SteamVR.
              </p>
            </Col>

            <Col md={6}>
              <SectionCarrusel />
            </Col>
          </Row>
        </Container>

        <Container className={`${style.containerFb} mt-5`}>
          <h3 className={`${style.subtitleHome} mb-3`}>Full-Body</h3>
          <Row>
            <Col md={6}>
              <img
                src={trackhome}
                alt="Img Tracker"
                className={`${style.imgtack} img-fluid`}
              />
            </Col>

            <Col md={6} className="mt-2">
              <h3 className={`${style.subtitleHome} mb-3 mt-3`}>Tracker</h3>
              <p className={style.parrafoHome}>
                El fullbody tracking PI-VR trabaja en conjunto con el software
                de SlimeVR a la par que SteamVR; con un diseño cómodo y
                ajustable tanto para la cintura como para las piernas el cual
                funciona con cualquier tipo de headset. Uno de los beneficios de
                este sistema de trackeo es que este mismo no será obstruido por
                objetos que crucen cerca permitiendo de esta forma usarlo por
                ejemplo bajo la comodidad de estar bajo las sábanas. También
                como añadido ofrecemos asistencia técnica a través de mensaje,
                llamada o VRC.
              </p>
            </Col>
          </Row>
        </Container>

        <Container className={`${style.containerFb} mt-5`}>
          <Row>
            <Col md={6} className="mt-5">
              <h3 className={`${style.subtitleHome} mb-3 mt-5`}>Extensor</h3>
              <p className={style.parrafoHome}>
                Un extensor es utilizado para mover los pies y también puede ser
                usado como reemplazo de un tracker, estos tienen que estar
                conectados a un tracker para funcionar
              </p>
            </Col>

            <Col md={6}>
              <img
                src={exthome}
                alt="Img extensor"
                className={`${style.imgtack} img-fluid`}
              />
            </Col>
          </Row>
        </Container>

        <Container className={style.containerMedia}>
          <Row>
            <Col md={6} className={style.containerV1V2}>
              <ReactPlayer
                width="100%"
                height="250px"
                url="https://www.youtube.com/watch?v=a6c--K_2qcI&ab_channel=PI-VRArgentina"
                controls
              />
              <div className={style.video2}>
                <ReactPlayer
                  width="100%"
                  height="250px"
                  url="https://www.youtube.com/watch?v=vNvyvMjqg4U&ab_channel=PI-VRArgentina"
                  controls
                />
              </div>
            </Col>
            <Col md={6}>
              <div className={style.video3}>
                <ReactPlayer
                  width="100%"
                  height="400px"
                  url="https://www.youtube.com/watch?v=nlGFijJpzY4&ab_channel=PI-VRArgentina"
                  controls
                />
              </div>
            </Col>
          </Row>
        </Container>

        <Container className={style.containerComp}>
          <h3 className={`${style.subtitleHome} mb-3`}>Compromisos</h3>
          <Row>
            <Col>
              <p className={style.parrafoHome}>
                Cada tracker pasa por diferentes testeos antes de ser enviados y
                nos comprometemos a intercambiar el tracker de haber cualquier
                fallo de fabricación en el mismo. También cuenta con 6 meses de
                garantía y asistencia técnica
              </p>
            </Col>
          </Row>
        </Container>

        <Container className={style.containerComp}>
          <Row>
            <Col md={6}>
              <Card className={style.cardFin}>
                <Card.Body className="d-flex flex-column">
                  <h3 className={`${style.titleCard} mb-3`}>
                    ¿Quieres hacer una consulta o realizar una compra?
                  </h3>
                  <Container className="d-flex justify-content-center">
                    <button className={style.buttonsCard}>Contacto</button>
                  </Container>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className={style.cardFin}>
                <Card.Body>
                  <h3 className={`${style.titleCard} mb-3`}>
                    Tambien puedes visitar preguntas frecuentes
                  </h3>
                  <Container className="d-flex justify-content-center">
                    <button className={style.buttonsCard}>Ir a Faqs</button>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
