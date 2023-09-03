import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './seccion1.css';

import imagen1 from '../../../assets/seccion-1/Banner1.jpg';
import imagen2 from '../../../assets/seccion-1/Banner-2.jpg';
import imagen3 from '../../../assets/seccion-1/Banner-1-2.jpg';
import imagen4 from '../../../assets/seccion-1/Banner-1.jpg';


const carouselStyle = {
  width: '100%', 
  height: '560px',
  margin: '0 auto', // Centrar el carousel horizontalmente
  objectFit: 'cover'
};

function Seccion1() {
  return (
    <Carousel style={carouselStyle}>
      <Carousel.Item>
        <img src={imagen1} alt="Ecoclean" style={carouselStyle}/>
        <Carousel.Caption>
          <h3>Limpieza Ecológica y Consciente </h3>
          <p className='p-seccion'> En nuestro local, abrazamos un enfoque ecoamigable
             y sostenible para el cuidado del hogar y el planeta.
              Nuestros productos y técnicas de limpieza están diseñados
               para ser completamente libres de toxinas, asegurando un ambiente
                saludable para todos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imagen2} alt="First slide" style={carouselStyle}/>
       
      </Carousel.Item>
      <Carousel.Item>
        <img src={imagen3} alt="First slide" style={carouselStyle}/>
      
      </Carousel.Item>
      <Carousel.Item>
        <img src={imagen4} alt="First slide" style={carouselStyle}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Seccion1;
