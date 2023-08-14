import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './mynavbar.css'; // Añadiremos estilos personalizados

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand href="#home">
        <h1>EcoClean</h1>

        </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
      <Nav className="mr-auto my-2 my-lg-0">
  <Nav.Link href="#section1">Limpieza ecológica</Nav.Link>
  <Nav.Link href="#section2">Aceites esenciales</Nav.Link>
  <Nav.Link href="#section3">Tips&Recetas</Nav.Link>
  <NavDropdown title="Nudo de Bruja" id="navbarScrollingDropdown">
    <NavDropdown.Item href="#action1">Esencias</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action2">Perfumes</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action3">Velitas</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action4">Otros</NavDropdown.Item>
  </NavDropdown>
  <Nav.Link href="#section3">Sobre nosotros</Nav.Link>
</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
