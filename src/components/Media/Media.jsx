import React from "react";
import ReactPlayer from "react-player";
import cintTraker from "../../imagenes/cinturontraker.png";
import bodytraker from "../../imagenes/bodytraker.png";
import traker from "../../imagenes/traker.png";
import extensor from "../../imagenes/extensor.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./media.css";
import SectionCarrusel from "../Carrusel/Carrusel";

function Media() {
  return (
    <div className="container">
      <div className="d-flex mt-5 containerPrimaryVideos">
        <div className="d-flex flex-column" id="containerVideo">
          <div className="pb-4">
            <ReactPlayer
              width="120%"
              height="250px"
              url="https://www.youtube.com/watch?v=a6c--K_2qcI&ab_channel=PI-VRArgentina"
              controls
            />
          </div>
          <div>
            <ReactPlayer
              width="120%"
              height="250px"
              url="https://www.youtube.com/watch?v=vNvyvMjqg4U&ab_channel=PI-VRArgentina"
              controls
            />
          </div>
        </div>
        <div className="containerThirdVideo">
          <ReactPlayer
            width="250%"
            height="100%"
            url="https://www.youtube.com/watch?v=nlGFijJpzY4&ab_channel=PI-VRArgentina"
            controls
          />
        </div>
      </div>
      <div className="d-flex justify-content-center my-5">
        <SectionCarrusel />
      </div>
      <div className="d-flex divContainerExtensor">
        <img
          src={extensor}
          alt="imgextensor"
          className="img-fluid"
          id="imgextensor"
        />
        <div className="containerExtensor">
          <h3 className="pb-3 ps-4 titleExtensor">
            Utilización de un PI-VR y un Extensor para pie
          </h3>
          <h6 className="container textExtensor">
            El extensor se conecta por la entrada micro usb del tracker y el
            cable es sostenido mediante un pasa cable
          </h6>
        </div>
      </div>
      <div className="containerCards">
        <Card className="containerCard">
          <Card.Img variant="top" src={cintTraker} className='imgCard' />
          <Card.Body>
            <Card.Title className="TitleCard">PI-VR con correa</Card.Title>
          </Card.Body>
        </Card>

        <Card className="containerCard">
          <Card.Img variant="top" src={bodytraker} className='imgCard' />
          <Card.Body>
            <Card.Title className="TitleCard">Colocación</Card.Title>
            <Card.Subtitle className="subTitleCard">Utilización de 5 PI-VR + 3 Extensores</Card.Subtitle>
          </Card.Body>
        </Card>

        <Card className="containerCard">
          <Card.Img variant="top" src={traker} className='imgCard' />
          <Card.Body>
            <Card.Title className="TitleCard">Pi-VR y un extensor</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Media;
