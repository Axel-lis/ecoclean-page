import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../Seccion1/seccion1.css';

import seccion1 from '../../../assets/seccion-2/banner-1-1.jpg';
import seccion2 from '../../../assets/seccion-2/banner-1-2-1.jpg';
import seccion3 from '../../../assets/seccion-2/banner-nudo.jpg';


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
        <img src={seccion1} alt="First slide" style={carouselStyle}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={seccion2} alt="First slide" style={carouselStyle}/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={seccion3} alt="First slide" style={carouselStyle}/>

      </Carousel.Item>
    </Carousel>
  );
}

export default Seccion2;
