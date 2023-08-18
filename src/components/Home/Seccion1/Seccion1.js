import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './seccion1.css';

import imagen1 from '../../../assets/seccion-1/imagen1.png';




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
        <img src={imagen1} alt="First slide" style={carouselStyle}/>
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
        <img src={imagen1} alt="First slide" style={carouselStyle}/>
        <Carousel.Caption>
          <h3>Cambiando los hábitos de consumo</h3>
          <p className='p-seccion'> Nos enorgullece ser agentes del cambio al promover 
                hábitos de consumo consciente, invitando a nuestros clientes a unirse a
                 nosotros en la importante misión de preservar nuestro entorno mientras 
                 transformamos la forma en que entendemos la limpieza.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imagen1} alt="First slide" style={carouselStyle}/>
        <Carousel.Caption>
          <h3></h3>
          <p> </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={imagen1} alt="First slide" style={carouselStyle}/>
        <Carousel.Caption>
          <h3>Volver a las raíces</h3>
          <p className='p-seccion'>Nuestras abuelas ya usaban vinagre y bicarbonato de sodio para limpiar, 
            hoy en día el vinagre de limpieza es más concentrado y útil, y se sumó
             el percarbonato de sodio, que es un mineral que se activa con agua caliente y produce oxígeno activo..</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Seccion1;
