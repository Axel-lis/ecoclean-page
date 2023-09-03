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
          <Col lg={4} md={6}>
            <h5 className="text-white mb-3">Página Web desarrollada por:</h5>
            <p className="small text-white">Axel Liscovsky || Web App Developer</p>
            <ul className="list-unstyled text-muted">
              <li>🌐<a href="https://www.linkedin.com/in/axel-liscovsky/"> LinkedIn Axel Liscovsky</a></li>
              <li>✉️<a href="mailto:axelliscovsky@outlook.com.ar">  Contáctame!</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
