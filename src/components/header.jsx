import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./header.scss";

export default function Header() {
  return (
    <Navbar className="header" fixed="top" expand="lg">
      <Container className="header-container">
        <Navbar.Brand href="/">
          <img className="header-logo" src={logo} alt="RanGo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="header-link" to="/">
              Home
            </Link>
            <Link className="header-link" to="/sobre">
              Sobre
            </Link>
            <Link className="header-link" to="/noticias">
              Conteúdo
            </Link>
            <Link className="header-link" to="#sejaparceiro">
              Seja parceiro
            </Link>
            <Link className="header-link" to="/plataforma">
              Plataforma RanGo
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
