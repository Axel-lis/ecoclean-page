import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { IconRecycle, IconPlant2 } from '@tabler/icons-react';

import bicarbonato from '../../../assets/banners/bicarbonato.jpg';
import percarbonato from '../../../assets/banners/percarbonato.jpg';
import vinagre from '../../../assets/banners/vinagre.jpg';
import tierra from '../../../assets/banners/tierra.jpg';
import magicpowder from '../../../assets/banners/magicpowder.jpg';
import borax from '../../../assets/banners/borax.jpg';
import './banner1.css'
function Banner1() {
//estilos jsx para las columnas e iconos
const colStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
   
  };
  const iconStyle = {
    fontSize: '64px', 
    color: '#679436',   
  };
  return (
    <Container fluid>
      <Row>
      <Col style={colStyle}>
        <h1>
            <IconRecycle style={iconStyle}  />
        </h1>
            <div className="card w-18rem">
            <img className="card-img-top" src={bicarbonato} alt='imagentop' />
              <div className="card-body">
                <h5 className="card-title">Bicarbonato de Sodio</h5>
                <p className="card-text">Sustituto sostenible, de los limpiadores de hogar convencionales. Respetuoso con el medio ambiente, económico y multiusos. Lava los platos, desengrasa el horno, desatasca el desagüe, abrillanta los cubiertos y elimina los malos olores.</p>
                <a href="#algunlugar" class="btn btn-primary">Aprende más!</a>
              </div>
            </div>
        </Col>
        <Col style={colStyle}>
            <h1>
            <IconPlant2  style={iconStyle}  />
            </h1>
            <div className="card w-18rem">
            <img className="card-img-top" src={percarbonato} alt='imagentop' />
              <div className="card-body">
                <h5 className="card-title">Percarbonato de Sodio</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#algunlugar" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
        </Col>
        <Col style={colStyle}>
        <h1>
        <IconRecycle style={iconStyle}  />
        </h1>
            <div className="card w-18rem">
            <img className="card-img-top" src={vinagre} alt='imagentop' />
              <div className="card-body">
                <h5 className="card-title">Vinagre Concentrado de Limpieza</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#algunlugar" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
        </Col>
      </Row>
      <Row>
      <Col style={colStyle}>

            <div className="card w-18rem">
            <img className="card-img-top" src={tierra} alt='imagentop' />
              <div className="card-body">
                <h5 className="card-title">Tierra de Diatomeas</h5>
                <p className="card-text">Sustituto sostenible, de los limpiadores de hogar convencionales. Respetuoso con el medio ambiente, económico y multiusos. Lava los platos, desengrasa el horno, desatasca el desagüe, abrillanta los cubiertos y elimina los malos olores.</p>
                <a href="#algunlugar" class="btn btn-primary">Aprende más!</a>
              </div>
            </div>
        </Col>
        <Col style={colStyle}>

            <div className="card w-18rem">
            <img className="card-img-top" src={magicpowder} alt='imagentop' />
              <div className="card-body">
                <h5 className="card-title">Magic Powder</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#algunlugar" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
        </Col>
        <Col style={colStyle}>

            <div className="card w-18rem">
            <img className="card-img-top" src={borax} alt='imagentop' />
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

export default Banner1;