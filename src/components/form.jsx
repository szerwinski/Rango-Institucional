import React from "react";
import "./form.scss";

export default function Form() {
  window.addEventListener("submit", () => {
    console.log("working");
  });

  return (
    <main className="form-container">
      <h3>Quer cadastrar seu estabelecimento no RanGo ?</h3>

      <p>
        Preencha o formulário abaixo e um de nossos especialistas entrará em
        contato o quanto antes!
      </p>

      <form className="form-element">
        <input className="form-input" type="text" placeholder="Nome completo" />
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
        <input className="form-input" type="text" placeholder="Razão social" />
        <input className="form-input" type="text" placeholder="Endereço" />
        <input className="form-input" type="num" placeholder="CEP" />
        <input className="form-button" type="submit" value="ENVIAR" />
      </form>
    </main>
  );
}
