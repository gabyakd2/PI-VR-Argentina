import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css";
import img1 from '../../imagenes/imgcarr1.png'
import img2 from '../../imagenes/imgcarr2.png'
import img3 from '../../imagenes/imgcarr3.png'
import img4 from '../../imagenes/imgcarr4.png'

const SectionCarrusel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="w-100 h-100 imgCarrousel"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 h-100 imgCarrousel"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 h-100 imgCarrousel"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 h-100 imgCarrousel"
          src={img4}
          alt="Four slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default SectionCarrusel;
