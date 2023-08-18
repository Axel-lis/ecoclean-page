import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../Seccion1/seccion1.css';

import seccion2 from '../../../assets/seccion-2/nudo3.png';




const carouselStyle = {
  width: '100%', 
  height: '600px',
  margin: '0 auto', // Centrar el carousel horizontalmente
  objectFit: 'cover'
};

function Seccion2() {
  return (
    <Carousel style={carouselStyle}>
      <Carousel.Item>
        <img src={seccion2} alt="First slide" style={carouselStyle}/>
        <Carousel.Caption>
          <h3>Nudo de Bruja</h3>
          <p className='p-seccion'>Una experiencia para conectar con los aromas y los mensajes que tienen para darnos✨</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={seccion2} alt="First slide" style={carouselStyle}/>
        <Carousel.Caption>
          <h3>Nudo de Bruja</h3>
          <p className='p-seccion'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={seccion2} alt="First slide" style={carouselStyle}/>
        <Carousel.Caption>
          <h3>Nudo de Bruja</h3>
          <p className='p-seccion'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Seccion2;
