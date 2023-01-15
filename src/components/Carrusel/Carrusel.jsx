import React from "react";
import "./carousel.css";
import img1 from '../../imagenes/imgcarr1.png'
import img2 from '../../imagenes/imgcarr2.png'
import img3 from '../../imagenes/imgcarr3.png'
import img4 from '../../imagenes/imgcarr4.png'

const SectionCarrusel = () => {
  return (
    <div className="countainerPriCarrousel">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100 imgCarrousel" alt="imgcarrusel" />
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100 imgCarrousel" alt="imgcarrusel" />
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100 imgCarrousel" alt="imgcarrusel" />
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block w-100 imgCarrousel" alt="imgcarrusel" />
    </div>
  </div>
  <div className="buttonsCarousel">
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>  
  </div>
</div>
    </div>
  );
};

export default SectionCarrusel;
