import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import x6ttacker from "../../imagenes/x6tracker.png";
import x5tacker from "../../imagenes/trackerx5.png";
import x5tackerx1 from "../../imagenes/trackerx5x1.png";
import tracker from "../../imagenes/cinturontraker.png";
import tracker2 from "../../imagenes/extpivr.png";
import Aos from "aos";
import "aos/dist/aos.css";
import style from "./catalogue.module.css";
import { Col, Container, Row } from "react-bootstrap";

function Catalogue() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <Container>
        <h3 className={style.h3catalogo}>Datos Técnicos:</h3>
        <Row>
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
                    Rango de frecuencia: 2.4 GHz ~ 2.5 GHz (2400 MHz ~ 2483.5
                    MHz) * (no es compatible con 5Ghz de internet)* Rango de
                    conexion: cobertura del router Alimentacion: 5v (voltaje que
                    ofrece la entrada USB) sensor: mpu6050 Consumo: 100ma
                    Precision: 1-10 cm (se mejora configurando correctamente)
                    Latencia: 15 - 30ms Covertura: 360º Duracion de bateria: 8h
                    Dimenciones: 8,5cm x 6,5cm x 2,9cm Tipo de bateria: 18650
                    Tiempo de carga: 2h (dependiendo cargador) Conexión: micro
                    usb Cargar con 5v usando un cable usb a micro usb, puede
                    estar conectado al pc o a un cargador de celular
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
                    Rango de frecuencia: 2.4 GHz ~ 2.5 GHz (2400 MHz ~ 2483.5
                    MHz) * (no es compatible con 5Ghz de internet)* Rango de
                    conexion: cobertura del router Alimentacion: 5v (voltaje que
                    ofrece la entrada USB) sensor: mpu6050 Consumo: 100ma
                    Precision: 1-10 cm (se mejora configurando correctamente)
                    Latencia: 15 - 30ms Covertura: 360º Duracion de bateria:
                    compartida con el tracker conectado Dimenciones: 3,5cm x
                    2,5cm x 1,2cm Conexión: micro usb
                  </Card.Text>
                </Card.Body>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className={style.containerCard}>
        <Row>
          <Col md={6}>
            <h3 className={style.titleCardCat}>Pack x6-2 Pi-VR</h3>
            <p className={style.priceCardCat}>
              Precio: <span className={style.numberPrice}>95000 ARS</span>
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

          <Col md={6}>
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
          <Col md={6}>
            <h3 className={style.titleCardCat}>Pack x5-3 Pi-VR</h3>
            <p className={style.priceCardCat}>
              Precio: <span className={style.numberPrice}>90000 ARS</span>
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

          <Col md={6}>
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
          <Col md={6}>
            <h3 className={style.titleCardCat}>Pack x5-1 Pi-Vr</h3>
            <p className={style.priceCardCat}>
              Precio: <span className={style.numberPrice}>75000 ARS</span>
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

          <Col md={6}>
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
          <div data-aos="flip-left">
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
