import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imagen1 from '../../../assets/imagen1.jpg';
import './banner1.css'
function Banner1() {
  return (
    <Container fluid>
      <Row>
        <Col className='bg-primary'>
        <h1>Escencias</h1>
            <div className="card w-18rem">
            <img className="card-img-top" src={imagen1} alt='imagentop' />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#algunlugar" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
        </Col>
        <Col className='bg-danger'>
            <h1>Aceites</h1>
            <div className="card w-18rem">
            <img className="card-img-top" src={imagen1} alt='imagentop' />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#algunlugar" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
        </Col>
        <Col className='bg-success'>
        <h1>Acidos</h1>
            <div className="card w-18rem">
            <img className="card-img-top" src={imagen1} alt='imagentop' />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
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