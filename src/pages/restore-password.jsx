import React, { useState } from "react";
import { Col, Form, InputGroup, Row, Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import { Services } from "../hooks/services";
import "./restore-password.scss";

const services = new Services();
var password, passwordConfirmation;

export default function RestorePassword() {
  const [validated, setValidated] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  window.addEventListener("submit", async (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    const response = await services.handlePasswordRestore(
      password,
      passwordConfirmation,
      code
    );

    console.log(response);
  });

  return (
    <main className="restore-password">
      <Header />
      <section className="restore-password-content">
        <h1 className="orange">Redefinir senha</h1>
        <h4 className="restore-password-h4">
          Informe sua nova senha e confirme para redefini-la.
        </h4>
        <Form
          className="restore-password-form"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Form.Group md="4" controlId="validationCustom01">
            <Form.Control
              className="restore-password-form-input"
              required
              type="text"
              placeholder="SENHA"
              onChange={(e) => {
                password = e.target.value;
              }}
            />
          </Form.Group>
          <Form.Group md="4" controlId="validationCustom02">
            <Form.Control
              className="restore-password-form-input"
              required
              type="text"
              placeholder="CONFIRMAR SENHA"
              onChange={(e) => {
                passwordConfirmation = e.target.value;
              }}
            />
          </Form.Group>
          <Button className="restore-password-form-button" type="submit">
            Enviar
          </Button>
        </Form>
      </section>
      <Footer />
    </main>
  );
}
