import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { IconSparkles, IconPlant2 } from '@tabler/icons-react';
import EcoMap from '../../Map/Map';

function Banner3() {
  const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '64px',
    color: '#679436',
    margin: '0 10rem 0 10rem'
  };

  return (
    <>
      <Card>
        <Card.Header>
          <div style={iconContainerStyle}>
            <IconPlant2 />
            <IconSparkles />
            <IconPlant2 />
          </div>
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {' '}
              “El rubro de la limpieza estaba desatendido desde el punto de la sustentabilidad,
              el eje estaba en la alimentación y los residuos. Pero es uno de los más graves,
              porque ingresan al hogar tóxicos y plásticos de un solo uso en gran cantidad”. .{' '}
            </p>
            <footer className="blockquote-footer">
              Lorena Onofri, fundadora de <cite title="fundadora de">EcoClean</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
      <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="1">
        <Accordion.Header>¿Quiénes somos?</Accordion.Header>
        <Accordion.Body>
        Somos una entidad comprometida con la limpieza ecológica que tiene 
        como objetivo transformar los patrones de consumo hacia prácticas más responsables, 
        ecológicas y sostenibles. 
        Nuestra misión se centra en los principios de reducir, reciclar y reutilizar 
        para contribuir al cuidado del medio ambiente. Iniciamos nuestro viaje a finales
         de 2021 y desde entonces hemos ejercido un impacto significativo a nivel local,
         destacándonos tanto en términos de resultados como de precios.
          Todo esto ocurre dentro del marco de la sustentabilidad, en la constante búsqueda de un 
          mundo mejor para las generaciones presentes y futuras.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header>¿Dónde nos encontramos? </Accordion.Header>
        <Accordion.Body>
        <div id="map" style={{  height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
        <EcoMap />
    </div>

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Más sobre Ecoclean</Accordion.Header>
        <Accordion.Body>
         <a href='https://www.lapampanoticias.com.ar/noticias/emprendedores/ecoclean-la-limpieza-facil-eficaz-y-eco-friendly-es-posible/' target="_blank" rel="noreferrer" >Leer nota para el diario La Pampa Noticias</a>
         <br />  <br />
         <a href='https://www.youtube.com/watch?v=YJsEQr2aMzo' target="_blank" rel="noreferrer" >Entrevista televisiva para La Clave del éxito</a>
         <br />  <br />
         <a href='https://www.instagram.com/ecocleanlp/' target="_blank" rel="noreferrer" >Más información sobre productos de EcoClean</a>
         <br />  <br />
         <a href='https://www.instagram.com/ecocleanlp/' target="_blank" rel="noreferrer" >Nuestra red de Instagram</a>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </>
  );
}

export default Banner3;
