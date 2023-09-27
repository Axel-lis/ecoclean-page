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
import alumbre from '../../../assets/banners/alumbre.jpg';
import capsulas from '../../../assets/banners/capsulas.jpg';
import nueces from '../../../assets/banners/nueces.jpg'

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
                <a href="http://ecocleanlp.000webhostapp.com/index_bicarbonato.htm" target="_blank" rel="noreferrer" class="btn btn-primary">Aprende más!</a>
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
                <p className="card-text">Blanqueador y quitamanchas natural que contiene oxígeno activo, potente quitamanchas y blanqueante de ropa. Potencia la acción del detergente en lavado y quita manchas dificiles.</p>
                <a href="http://ecocleanlp.000webhostapp.com/index_percarbonato.htm" target="_blank" rel="noreferrer"  class="btn btn-primary">Aprende más!</a>
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
                <p className="card-text">Los productos ácidos, como el vinagre, se utilizan por su poder antical y desincrustante. Sirven para disolver suciedades inorgánicas o minerales (como el sarro) y manchas de óxido.</p>
                <a href="http://ecocleanlp.000webhostapp.com/index_vinagre.htm" target="_blank" rel="noreferrer"  class="btn btn-primary">Aprende más!</a>
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
                <a href="http://ecocleanlp.000webhostapp.com/index_diatomeas.htm" target="_blank" rel="noreferrer"  class="btn btn-primary">Aprende más!</a>
              </div>
            </div>
        </Col>
        <Col style={colStyle}>

            <div className="card w-18rem">
            <img className="card-img-top" src={magicpowder} alt='imagentop' />
              <div className="card-body">
                <h5 className="card-title">Magic Powder</h5>
                <p className="card-text">El Limpiador MAGIC POWDER de ECOCLEAN es un producto único que combina en igual medida el percarbonato de sodio y el bicarbonato de sodio, dos potentes agentes de limpieza consciente. Este producto ofrece una sorprendente versatilidad de usos, desde blanquear y eliminar manchas en la ropa sin dañar los tejidos, hasta limpiar diversos espacios en el hogar de manera económica y respetuosa con el medio ambiente, sin componentes tóxicos.</p>
                <a href="http://ecocleanlp.000webhostapp.com/index_magicpowder.htm" target="_blank" rel="noreferrer"  class="btn btn-primary">Aprende más!</a>
              </div>
            </div>
        </Col>
        <Col style={colStyle}>

            <div className="card w-18rem">
            <img className="card-img-top" src={borax} alt='imagentop' />
              <div className="card-body">
                <h5 className="card-title">BORAX  </h5>
                <p className="card-text">Excelente aliado contra la suciedad, las bacterias y todo tipo de insectos. Son muchas las personas que apuestan por el bórax para lavar suelos y paredes, desinfectar objetos, quitar manchas de muebles y de ropa.</p>
                <a href="http://ecocleanlp.000webhostapp.com/index_borax.htm" target="_blank" rel="noreferrer"  class="btn btn-primary">Aprende más!</a>
              </div>
            </div>
        </Col>
      </Row>
      <Row>
      <Col style={colStyle}>
      <div className="card w-18rem">
            <img className="card-img-top" src={alumbre} alt='imagentop' />
              <div className="card-body">
                <h5 className="card-title">Alumbre</h5>
                <p className="card-text">El uso más común de la piedra de alumbre es como desodorante natural. Sus propiedades antisépticas, astringentes y antitranspirantes crean una película que elimina microorganismos, mantiene la sequedad de la piel y previene la sudoración y el mal olor.</p>
                <a href="https://www.instagram.com/p/CtRWr8hO5me/" target="_blank" rel="noreferrer"  class="btn btn-primary">Aprende más!</a>
              </div>
      </div>
      </Col>
      <Col style={colStyle}>
      <div className="card w-18rem">
            <img className="card-img-top" src={capsulas} alt='imagentop' />
              <div className="card-body">
                <h5 className="card-title">Cápsulas hidrosolubles de lavado</h5>
                <p className="card-text">En contacto con el agua el envoltorio se disuelve y queda solamente la esencia del producto dentro del 
                recipiente o en la botella:
✔️ Es eco.
✔️Libre de tóxicos y biodegradable.
✔️Envase sin plástico
✔️Limpieza eficiente en agua fría.
✔️No se necesita usar suavizante..</p>
                <a href="https://www.instagram.com/p/CpEANoHPaor/" target="_blank" rel="noreferrer"  class="btn btn-primary">Aprende más!</a>
              </div>
      </div>
      </Col>
      <Col style={colStyle}>
      <div className="card w-18rem">
            <img className="card-img-top" src={nueces} alt='imagentop' />
              <div className="card-body">
                <h5 className="card-title">Nueces de lavado</h5>
                <p className="card-text">Detergente natural a base de frutos secos. Una alternativa 100% orgánica a los detergentes sintéticos.Son uno de los detergentes más sostenibles que existen hoy en día.
Son frutos del árbol Sapindus Mukorossi y se utilizan tal cual, sin apenas procesarlos.</p>
                <a href="https://www.instagram.com/p/CwXk9eSum02/"target="_blank" rel="noreferrer"   class="btn btn-primary">Aprende más!</a>
              </div>
      </div>
      </Col>
      </Row>
    </Container>
  );
}

export default Banner1;