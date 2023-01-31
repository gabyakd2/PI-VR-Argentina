import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import logoinv from "../../imagenes/servicio-al-cliente.png";
import Aos from "aos";
import swal from "sweetalert";
import "aos/dist/aos.css";
import "./formContact.css";

function FormContact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const [input, setInput] = useState({
    name: "",
    surname: "",
    email: "",
    messagge: "",
  });

  const handleMessagge = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if(input.name && input.surname && input.email && input.messagge) {
      swal("Gracias por contactarnos!", "Responderemos tu mail a la brevedad!", "success")
    }
  }
  // 

  return (
    <section className="contact mb-5" id="connect">
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
                      <input
                        type="text"
                        placeholder="Nombre"
                        name="name"
                        required
                       onChange={(e) => handleMessagge(e)}
                      />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        type="text"
                        placeholder="Apellido"
                        name="surname"
                        required
                        onChange={(e) => handleMessagge(e)}
                      />
                    </Col>
                  </div>
                  <Col sm={6} className="px-1" id="inputEm">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      required
                      onChange={(e) => handleMessagge(e)}
                    />
                  </Col>
                  <Col>
                    <textarea
                      row="6"
                      placeholder="Mensaje"
                      name="messagge"
                      required
                      onChange={(e) => handleMessagge(e)}
                    ></textarea>
                    <button type="submit" onClick={() => handleSubmit()}>
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
