import React, { useState } from "react";
import { Col, Form, InputGroup, Row, Button, Spinner } from "react-bootstrap";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import { Services } from "../hooks/services";
import "./restore-password.scss";

const services = new Services();

export default function RestorePassword() {
  let [validated, setValidated] = useState(false);
  let [password, setPassword] = useState(undefined);
  let [passwordConfirmation, setPasswordConfirmation] = useState(undefined);
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");

  async function handleSubmit(event) {
    event.preventDefault();
    setValidated(true);

    const requestBody = {
      password: password,
      passwordConfirmation: passwordConfirmation,
      code: code,
    };

    document.querySelector(".restore-password-content").style.display = "none";
    document.querySelector(".success").style.display = "flex";

    let response = await services.handlePasswordRestore(requestBody);
    console.log(response);
  }

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
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <Form.Group md="4" controlId="validationCustom01">
            <Form.Control
              className="restore-password-form-input"
              required
              type="text"
              placeholder="SENHA"
              onChange={(e) => {
                setPassword(e.target.value);
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
                setPasswordConfirmation(e.target.value);
              }}
            />
          </Form.Group>
          <Button className="restore-password-form-button" type="submit">
            Enviar
          </Button>
        </Form>
      </section>

      <div className="success">
        <span class="material-symbols-rounded">check_circle</span>

        <strong>
          Tudo pronto!
          <br />
          <p>Você já pode utilizar sua nova senha para fazer login.</p>
        </strong>
      </div>
      <Footer />

      <div className="loading">
        <Spinner className="spinner" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </main>
  );
}
