import React from "react";
import { Services } from "../hooks/services";
import "./form.scss";
import $ from "jquery";

const services = new Services();

export default function Form() {
  window.addEventListener("submit", async (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    const formElement = document.querySelector(".form-container");
    const formSuccess = document.querySelector(".form-success");
    const loader = document.querySelector(".loader");

    const data = {};

    const inputs = $(".form-input");

    inputs.map((index, el) => {
      console.log(el);

      data[el.name] = el.value;
    });

    try {
      await services.handleFormSubmit(data);
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
            required
            className="form-input"
            type="text"
            placeholder="Nome completo"
            name="name"
          />
          <input
            required
            className="form-input phone"
            type="phone"
            placeholder="Celular (com DDD)"
            name="phoneNumber"
          />
          <input
            required
            className="form-input"
            type="email"
            placeholder="E-mail"
            name="email"
          />
          <input
            required
            className="form-input cpf"
            type="number"
            placeholder="CPF"
            name="cpf"
          />
          <input
            required
            className="form-input"
            type="text"
            placeholder="Nome do restaurante"
            name="restaurantName"
          />
          <input
            className="form-input phone"
            type="phone"
            placeholder="Telefone comercial (caso possua)"
            name="comercialPhoneNumber"
          />
          <input
            className="form-input"
            type="text"
            placeholder="CNPJ (caso possua)"
            name="cnpj"
          />
          <input
            className="form-input"
            type="text"
            placeholder="Razão social"
            name="razaoSocial"
          />
          <input
            required
            className="form-input"
            type="text"
            placeholder="Endereço"
            name="address"
          />
          <input
            required
            className="form-input"
            type="num"
            placeholder="CEP"
            name="cep"
          />
          <button className="form-button" type="submit">
            Enviar
          </button>
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
