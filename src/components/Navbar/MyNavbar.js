import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mynavbar.css'; // Añadiremos estilos personalizados
import {IconBrandInstagram } from '@tabler/icons-react';
const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home">
        <h1>EcoClean</h1>

        </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Nav className="mr-auto my-2 my-lg-0">
  <Nav.Link href="#section1">Limpieza Ecológica </Nav.Link>
  <Nav.Link href="#section2">Nudo de Bruja</Nav.Link>
  <Nav.Link href="#section3">Sobre nosotros</Nav.Link>
  <Nav.Link href="https://www.instagram.com/ecocleanlp/"> <IconBrandInstagram />@ecocleanlp </Nav.Link>
  </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
