import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import x6ttacker from "../../imagenes/x6tracker.png";
import x5tacker from "../../imagenes/trackerx5.png";
import x5tackerx1 from "../../imagenes/trackerx5x1.png";
import tracker from "../../imagenes/trackpivrhome.png";
import tracker2 from "../../imagenes/pivrexthome.png";
import imgizq from "../../imagenes/imgizq.png";
import Aos from "aos";
import "aos/dist/aos.css";
import style from "./catalogue.module.css";
import { Col, Container, Row } from "react-bootstrap";

function Catalogue() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="zoom-up">
      <Container>
        <h3 className={style.h3catalogo}>Datos Técnicos:</h3>
        <Row data-aos="zoom-up" data-aos-duration="1000">
          <Col md={6}>
            <Card className="bg-transparent border-0 d-flex justify-content-center flex-column">
              <Container className={style.cardProduc}>
                <Card.Img
                  variant="top"
                  src={tracker}
                  className={`${style.imgProducts} img-fluid`}
                />
                <Card.Body>
                  <Card.Title className={style.h1catalogo}>
                    Datos técnicos tracker:
                  </Card.Title>
                  <Card.Text className={style.parrafoTra}>
                    <ul className={style.ulCard}>
                      <li>
                        Rango de frecuencia: 2.4 GHz ~ 2.5 GHz (2400 MHz ~
                        2483.5 MHz) * (no es compatible con 5Ghz de internet).
                      </li>
                      <li>Rango de conexion: cobertura del router.</li>
                      <li>
                        Alimentacion: 5v (voltaje que ofrece la entrada USB).{" "}
                      </li>
                      <li>Sensor: mpu6050. </li>
                      <li>Consumo: 100ma.</li>
                      <li>
                        Precision: 1-10 cm (se mejora configurando
                        correctamente).
                      </li>
                      <li>Latencia: 15 - 30ms.</li>
                      <li>Covertura: 360º.</li>
                      <li>Duracion de bateria: 8h.</li>
                      <li>Dimenciones: 8,5cm x 6,5cm x 2,9cm.</li>
                      <li>Tipo de bateria: 18650.</li>
                      <li>Tiempo de carga: 2h (dependiendo cargador).</li>
                      <li>
                        Conexión: micro usb Cargar con 5v usando un cable usb a
                        micro usb, puede estar conectado al pc o a un cargador
                        de celular.
                      </li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Container>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="bg-transparent border-0 d-flex justify-content-center flex-column">
              <Container className={style.cardProduc}>
                <Card.Img
                  variant="top"
                  src={tracker2}
                  className={`${style.imgProducts} img-fluid`}
                />
                <Card.Body>
                  <Card.Title className={style.h1catalogo}>
                    Datos técnicos extensor:
                  </Card.Title>
                  <Card.Text className={style.parrafoTra}>
                    <ul className={style.ulCard}>
                      <li>
                        Rango de frecuencia: 2.4 GHz ~ 2.5 GHz (2400 MHz ~
                        2483.5 MHz) * (no es compatible con 5Ghz de internet).
                      </li>
                      <li>Rango de conexion: cobertura del router.</li>
                      <li>
                        Alimentacion: 5v (voltaje que ofrece la entrada USB).
                      </li>
                      <li>Sensor: mpu6050.</li>
                      <li>Consumo: 100ma</li>
                      <li>
                        Precision: 1-10 cm (se mejora configurando
                        correctamente).
                      </li>
                      <li>Latencia: 15 - 30ms.</li>
                      <li>Covertura: 360º.</li>
                      <li>
                        Duracion de bateria: compartida con el tracker
                        conectado.
                      </li>
                      <li>Dimenciones: 3,5cm x 2,5cm x 1,2cm.</li>
                      <li>Conexión: micro usb.</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className={style.containerCard}>
        <Row>
          <Col md={6} >
            <h3 className={style.titleCardCat}>Pack x6-2 Pi-VR</h3>
            <p className={style.priceCardCat}>
              Precio: <span className={style.numberPrice}>100.000 ARS</span>
            </p>
            <div className="d-flex">
              <p className={style.textCardCat}>Incluye:</p>
              <ul>
                <li className={style.liCardCat}>x6 Pi-VR</li>
                <li className={style.liCardCat}>
                  x6 correas regulables con broche
                </li>
                <li className={style.liCardCat}>x2 hebillas de repuesto</li>
                <li className={style.liCardCat}>x2 cables USB a MicroUSB</li>
                <li className={style.liCardCat}>x2 Extensores (para pie)</li>
              </ul>
            </div>
          </Col>

          <Col md={6} >
            <div className={style.divCardCat}>
              <img
                src={x6ttacker}
                alt="img tracker"
                className={`${style.imgCardCat} img-fluid`}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className={style.containerCard}>
        <Row>
          <Col md={6} >
            <h3 className={style.titleCardCat}>Pack x5-3 Pi-VR</h3>
            <p className={style.priceCardCat}>
              Precio: <span className={style.numberPrice}>95000 ARS</span>
            </p>
            <div className="d-flex">
              <p className={style.textCardCat}>Incluye:</p>
              <ul>
                <li className={style.liCardCat}>x5 Pi-VR</li>
                <li className={style.liCardCat}>
                  x5 correas regulables con broche
                </li>
                <li className={style.liCardCat}>x2 hebillas de repuesto</li>
                <li className={style.liCardCat}>x2 cables USB a MicroUSB</li>
                <li className={style.liCardCat}>x2 Extensores (para pie)</li>
                <li className={style.liCardCat}>x1 Extensores (para pecho)</li>
              </ul>
            </div>
          </Col>

          <Col md={6} >
            <div className={style.divCardCat}>
              <img
                src={x5tacker}
                alt="img tracker"
                className={`${style.imgCardCat} img-fluid`}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className={style.containerCard}>
        <Row>
          <Col md={6} >
            <h3 className={style.titleCardCat}>Pack x6 Pi-Vr:</h3>
            <p className={style.priceCardCat}>
              Precio: <span className={style.numberPrice}>85000 ARS</span>
            </p>
            <div className="d-flex">
              <p className={style.textCardCat}>Incluye:</p>
              <ul>
                <li className={style.liCardCat}>x6 Pi-VR </li>
                <li className={style.liCardCat}>
                  x6 correas regulables con broche
                </li>
                <li className={style.liCardCat}>x2 hebillas de repuesto</li>
                <li className={style.liCardCat}>x2 cables USB a MicroUSB</li>
              </ul>
            </div>
          </Col>

          <Col md={6} >
            <div className={style.divCardCat}>
              <img
                src={imgizq}
                alt="img tracker"
                className={`${style.imgCardCatSola} img-fluid`}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className={style.containerCard}>
        <Row>
          <Col md={6} >
            <h3 className={style.titleCardCat}>Pack x5-1 Pi-Vr</h3>
            <p className={style.priceCardCat}>
              Precio: <span className={style.numberPrice}>80000 ARS</span>
            </p>
            <div className="d-flex">
              <p className={style.textCardCat}>Incluye:</p>
              <ul>
                <li className={style.liCardCat}>x5 Pi-VR</li>
                <li className={style.liCardCat}>
                  x5 correas regulables con broche
                </li>
                <li className={style.liCardCat}>x2 hebillas de repuesto</li>
                <li className={style.liCardCat}>x2 cables USB a MicroUSB</li>
                <li className={style.liCardCat}>x1 Extensores (para pecho)</li>
              </ul>
            </div>
          </Col>

          <Col md={6} >
            <div className={style.divCardCat}>
              <img
                src={x5tackerx1}
                alt="img tracker"
                className={`${style.imgCardCat} img-fluid`}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className={style.containerComp}>
        <div>
          <Card className={style.cardFin}>
            <Card.Body className="d-flex flex-column">
              <h3 className={`${style.titleCard} mb-3`}>
                ¿Quieres hacer una consulta o realizar una compra?
              </h3>
              <Container className="d-flex justify-content-center">
                <a href="/contact" className={style.hrefButtons}>
                  <button className={style.buttonsCard}>Contacto</button>
                </a>
              </Container>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default Catalogue;
