import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import imagen1 from '../../../assets/seccion-3/lore-1.jpg';



const carouselStyle = {
  width: '100%', 
  height: '560px',
  margin: '0 auto', // Centrar el carousel horizontalmente
  objectFit: 'cover'
};
 //seccion-3 sobre  nosotros
function Seccion3() {
  return (
    <Carousel style={carouselStyle}>
      <Carousel.Item>
        <img src={imagen1} alt="First slide" style={carouselStyle}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default Seccion3;
