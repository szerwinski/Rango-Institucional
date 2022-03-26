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
              HOME
            </Link>
            <Link className="header-link" to="/sobre">
              SOBRE
            </Link>
            <Link className="header-link" to="/noticias">
              CONTEÚDO
            </Link>
            <a className="header-link" href="#sejaparceiro">
              SEJA PARCEIRO
            </a>
            <Link className="header-link download" to="/plataforma">
              <span className="header-divider"></span>
              PLATAFORMA RANGO
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
