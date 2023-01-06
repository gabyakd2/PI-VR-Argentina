import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import logoinv from '../../imagenes/servicio-al-cliente.png'
import './formContact.css'
import 'animate.css';

function FormContact() {

    const [ status, setStatus ] = useState({})

  return (
    <section className='contact' id='connect'>
        <Container>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src={logoinv} alt="imagen form" className='img-fluid' id='imgform'/>
                </Col>
                <Col md={6}>
                <TrackVisibility>
                            {( { isVisible } ) => 
                                <div className={isVisible ? 'animate__animated animate__zoomIn' : ''}>
                                    
                                    <form action="https://formsubmit.co/pivrargentina@gmail.com" method="POST">
                                        <Row>
                                            <div className='containerInput'>
                                                <Col sm={6} className='px-1'>
                                                    <input name='Nombre' type='text' placeholder='Nombre' />
                                                </Col>
                                                <Col sm={6} className='px-1'>
                                                    <input name='Apellido' type='text' placeholder='Apellido' />
                                                </Col>
                                            </div>
                                            <Col sm={6} className='px-1' id='inputEm'>
                                                <input name='Email' type='email' placeholder='Email' />
                                            </Col>
                                            <Col>
                                                <textarea name='Mensaje' row='6' placeholder='Mensaje' ></textarea>
                                                <button type='submit'><span>Enviar</span></button>
                                            </Col>
                                            {
                                                status.message && 
                                                <Col>
                                                    <p className={status.success === false ? 'danger' : 'success'}>
                                                        {status.message}
                                                    </p>
                                                </Col>
                                            }
                                        </Row>
                                    </form>
                                </div>
                            }
                </TrackVisibility>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default FormContact