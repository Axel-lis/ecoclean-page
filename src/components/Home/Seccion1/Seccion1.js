import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import imagen1 from '../../../assets/imagen1.jpg';
import imagen2 from '../../../assets/imagen2.jpg';
import imagen3 from '../../../assets/imagen3.webp';


const carouselStyle = {
  width: '100%', 
  height: '600px',
  margin: '0 auto', // Centrar el carousel horizontalmente
  objectFit: 'cover'
};

function Seccion1() {
  return (
    <Carousel style={carouselStyle}>
      <Carousel.Item>
        <img src={imagen1} alt="First slide" style={carouselStyle}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imagen2} alt="First slide" style={carouselStyle}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imagen3} alt="First slide" style={carouselStyle}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Seccion1;
