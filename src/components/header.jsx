import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../assets/logo.svg';
import "./header.scss";

export default function Header() {
  return (
    <Navbar className="header" fixed="top" expand="lg">
      <Container className="header-container">
        <Navbar.Brand href="/"><img className="header-logo" src={logo} alt="RanGo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="header-link" href="/">Home</Nav.Link>
            <Nav.Link className="header-link" href="/sobre">Sobre</Nav.Link>
            <Nav.Link className="header-link" href="/noticias">Conteúdo</Nav.Link>
            <Nav.Link className="header-link" href="#sejaparceiro">Seja parceiro</Nav.Link>
            <Nav.Link className="header-link" href="/plataforma">Plataforma RanGo</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
