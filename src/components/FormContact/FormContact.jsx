import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logoinv from "../../imagenes/servicio-al-cliente.png";
import Aos from "aos";
import "aos/dist/aos.css";
import "./formContact.css";

function FormContact() {

    useEffect(() => {
        Aos.init({duration:2000})
      })

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img
              src={logoinv}
              alt="imagen form"
              className="img-fluid mb-4"
              id="imgform"
            />
          </Col>
          <Col md={6}>
            <div className="" data-aos="zoom-up" data-aos-duration="4000">
              <form
                action="https://formsubmit.co/pivrargentina@gmail.com"
                method="POST"
              >
                <Row>
                  <div className="containerInput">
                    <Col sm={6} className="px-1">
                      <input name="Nombre" type="text" placeholder="Nombre" />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        name="Apellido"
                        type="text"
                        placeholder="Apellido"
                      />
                    </Col>
                  </div>
                  <Col sm={6} className="px-1" id="inputEm">
                    <input name="Email" type="email" placeholder="Email" />
                  </Col>
                  <Col>
                    <textarea
                      name="Mensaje"
                      row="6"
                      placeholder="Mensaje"
                    ></textarea>
                    <button type="submit">
                      <span>Enviar</span>
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FormContact;
