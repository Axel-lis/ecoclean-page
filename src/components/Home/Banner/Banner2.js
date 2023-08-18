import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {IconSparkles,  IconWand } from '@tabler/icons-react';

import esencias from '../../../assets/seccion-2/esencias.png';
import nudo from '../../../assets/banners/nudo.png';
import jabones from '../../../assets/seccion-2/jabones.png';
import velitas from '../../../assets/seccion-2/velitas.jpg';
import perfumes from '../../../assets/seccion-2/perfumes.png';
import bombas from '../../../assets/seccion-2/bombas.png';

import './banner1.css'
function Banner2() {
//estilos jsx para las columnas e iconos
const colStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
 
  };
  const iconStyle = {
    fontSize: '64px', 
    color: '#FA9500',   
  };
  return (
    <Container fluid>
      <Row>
      <Col style={colStyle}>
        <h1>
            <IconWand style={iconStyle}  />
        </h1>
            <div className="card w-18rem">
            <img className="card-img-top" src={esencias} alt='imagentop' />
              <div className="card-body">
                <h5 className="card-title">Esencias Naturales</h5>
                <p className="card-text">Sustituto sostenible, de los limpiadores de hogar convencionales. Respetuoso con el medio ambiente, económico y multiusos. Lava los platos, desengrasa el horno, desatasca el desagüe, abrillanta los cubiertos y elimina los malos olores.</p>
                <a href="#algunlugar" class="btn btn-primary">Aprende más!</a>
              </div>
            </div>
        </Col>
        <Col style={colStyle}>
            <h1>
            <IconSparkles  style={iconStyle}  />
            </h1>
            <div className="card w-18rem">
            <img className="card-img-top" src={jabones} alt='imagentop' />
              <div className="card-body">
                <h5 className="card-title">Jabones Orgánicos</h5>
                <p className="card-text">El chocolate y la manteca de cacao, tiene un alto contenido en polifenoles, éstos últimos, son nutrientes conocidos como unos de los más potentes antioxidantes naturales, le dan al jabón un gran poder reparador, relajante y reafirmante ricos en vitamina E que ayudan a aumentar la producción de colágeno y elastina en la piel.</p>
                <a href="#algunlugar" class="btn btn-primary">Leer más</a>
              </div>
            </div>
        </Col>
        <Col style={colStyle}>
        <h1>
        <IconWand style={iconStyle}  />
        </h1>
            <div className="card w-18rem">
            <img className="card-img-top" src={velitas} alt='imagentop' />
              <div className="card-body">
                <h5 className="card-title">Velitas Aromatizadas</h5>
                <p className="card-text">“el fuego es uno de los principales elementos transmutadores que acompaña la mayoría de los rituales y está presente en todos los pedidos y agradecimientos que hacemos”. La manera más fácil de llegar al elemento fuego, es a través de las velas. la vela per sé ya es un elemento poderosísimo, que va a activar la energía”.</p>
                <a href="#algunlugar" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
        </Col>
      </Row>
      <Row>
      <Col style={colStyle}>

            <div className="card w-18rem">
            <img className="card-img-top" src={perfumes} alt='imagentop' />
              <div className="card-body">
                <h5 className="card-title">Perfumes Nudo de Bruja</h5>
                <p className="card-text">Sustituto sostenible, de los limpiadores de hogar convencionales. Respetuoso con el medio ambiente, económico y multiusos. Lava los platos, desengrasa el horno, desatasca el desagüe, abrillanta los cubiertos y elimina los malos olores.</p>
                <a href="#algunlugar" class="btn btn-primary">Aprende más!</a>
              </div>
            </div>
        </Col>
        <Col style={colStyle}>

            <div className="card w-18rem">
            <img className="card-img-top" src={bombas} alt='imagentop' />
              <div className="card-body">
                <h5 className="card-title">Bombas de Baño</h5>
                <p className="card-text">Las bombas con aceite de manzanilla y aroma a tilo son una excelente opción para regalar y regalarte un momento, una experiencia con tu aroma favorito! Un baño de inmersión que además de relajar e hidratar la piel y huele genial!</p>
                <a href="#algunlugar" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
        </Col>
        <Col style={colStyle}>

            <div className="card w-18rem">
            <img className="card-img-top" src={nudo} alt='imagentop' />
              <div className="card-body">
                <h5 className="card-title">BORAX  </h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#algunlugar" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner2;