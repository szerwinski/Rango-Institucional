import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./header.scss";

export default function Header() {
  function goToForm() {
    const form = document.getElementById("sejaparceiro");

    form.scrollIntoView();
  }

  window.addEventListener("pageshow", () => {
    const form = document.getElementById("sejaparceiro");

    form == null
      ? document.getElementById("linkToForm").classList.add("hide")
      : document.getElementById("linkToForm").classList.remove("hide");
  });

  return (
    <Navbar className="header" fixed="top" expand="lg">
      <Container className="header-container">
        <Navbar.Brand href="/">
          <img className="header-logo" src={logo} alt="RanGo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <a className="header-link" href="/">
              HOME
            </a>
            <Link className="header-link" to="/sobre">
              SOBRE
            </Link>
            <Link className="header-link" to="/noticias">
              CONTEÚDO
            </Link>
            <a
              className="header-link"
              onClick={() => {
                goToForm();
              }}
              id="linkToForm"
            >
              SEJA PARCEIRO
            </a>
            <Link className="header-link" to="/ondeestamos">
              ONDE ESTAMOS
            </Link>
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
