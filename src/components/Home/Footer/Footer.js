import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="w-100 py-4 flex-shrink-0 bg-dark text-white">
      <Container py-4>
        <Row className="gy-4 gx-5">
          <Col lg={4} md={6}>
            <h5 className="h1 text-white">EcoClean 🌱</h5>
            <p className="small text-white">Encontranos en 📍Santa Rosa, La Pampa, Avenida Uruguay 785</p>
            <p className="small  mb-0">&copy; Copyrights. Todos los derechos reservados. <a className="text-primary" href="#we">https://www.instagram.com/ecocleanlp/</a></p>
          </Col>
          <Col lg={2} md={6}>
            <h5 className="text-white mb-3">Quick links</h5>
            <ul className="list-unstyled text-muted">
              <li><a href="#w">Home</a></li>
              <li><a href="#w">About</a></li>
              <li><a href="#w">Get started</a></li>
              <li><a href="#w">FAQ</a></li>
            </ul>
          </Col>
          <Col lg={2} md={6}>
            <h5 className="text-white mb-3">Quick links</h5>
            <ul className="list-unstyled text-muted">
              <li><a href="#w">Home</a></li>
              <li><a href="#w">About</a></li>
              <li><a href="#w">Get started</a></li>
              <li><a href="#w">FAQ</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
