import React from "react";
import { Services } from "../hooks/services";
import "./form.scss";

export default function Form() {
  window.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    const formElement = document.querySelector(".form-container");
    const formSuccess = document.querySelector(".form-success");
    const loader = document.querySelector(".loader");

    const data = {};

    const inputs = document.querySelectorAll(".form-input");
    inputs.forEach((element) => {
      data[element.name] = element.value;
    });

    const services = new Services();

    try {
      services.handleFormSubmit(data);
    } catch (error) {
      console.error(error);
    }

    formElement.classList.add("hide");
    loader.classList.remove("hide");

    services.timeout(() => {
      loader.classList.add("hide");
      formSuccess.classList.remove("hide");
    });
  });

  return (
    <main id="sejaparceiro" className="form">
      <section className="form-container">
        <h3>Quer cadastrar seu estabelecimento no RanGo ?</h3>

        <p>
          Preencha o formulário abaixo e um de nossos especialistas entrará em
          contato o quanto antes!
        </p>

        <form className="form-element">
          <input
            className="form-input"
            type="text"
            placeholder="Nome completo"
          />
          <input
            className="form-input"
            type="phone"
            placeholder="Celular (com DDD)"
          />
          <input className="form-input" type="email" placeholder="E-mail" />
          <input className="form-input" type="number" placeholder="CPF" />
          <input
            className="form-input"
            type="text"
            placeholder="Nome do restaurante"
          />
          <input
            className="form-input"
            type="phone"
            placeholder="Telefone comercial (caso possua)"
          />
          <input
            className="form-input"
            type="text"
            placeholder="CNPJ (caso possua)"
          />
          <input
            className="form-input"
            type="text"
            placeholder="Razão social"
          />
          <input className="form-input" type="text" placeholder="Endereço" />
          <input className="form-input" type="num" placeholder="CEP" />
          <input className="form-button" type="submit" value="ENVIAR" />
        </form>
      </section>

      <section className="loader hide">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>

      <section className="form-success hide">
        <h2 className="orange form-success-title">Sucesso!</h2>

        <p className="form-success-text">
          Recebemos sua solicitação, em breve um de nossos especialistas entrará
          em contato.
        </p>
      </section>
    </main>
  );
}
