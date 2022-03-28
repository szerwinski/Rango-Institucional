import React, { useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import "./restore-password.scss";
import { Services } from "../hooks/services";

export default function RestorePassword() {
  const [passwordShown, setPasswordShown] = useState(false);
  let password = "";
  let passwordConfirm = "";
  const services = new Services();

  function togglePasswordShown() {
    setPasswordShown(!passwordShown);
  }

  function handleDifferentPasswords() {
    document.getElementById("errortext").classList.add("show")
  }

  window.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    password == passwordConfirm
      ? services.handlePasswordRestore(password, passwordConfirm)
      : handleDifferentPasswords();
  });

  return (
    <main className="restore-password">
      <Header />

      <section className="restore-password-content">
        <h2 className="orange">Redefinir senha</h2>

        <p>Insira sua nova senha nos campos abaixo:</p>

        <form>
          <label htmlFor="password">Senha:</label>
          <div className="input-container">
            <input
              className="passwordInput"
              placeholder="*******"
              type={passwordShown ? "text" : "password"}
              name="password"
              onChange={(e) => {
                password = e.target.value;
              }}
            />
            <span
              onClick={() => togglePasswordShown()}
              class="material-icons-outlined input-icon"
            >
              visibility
            </span>
          </div>

          <label htmlFor="passwordConfirm">Confirme a senha:</label>
          <input
            className="passwordInput"
            placeholder="*******"
            type={passwordShown ? "text" : "password"}
            name="passwordConfirm"
            onChange={(e) => {
              passwordConfirm = e.target.value;
            }}
          />

          <h5 id="errortext">As senhas não são iguais!</h5>

          <input type="submit" value="ENVIAR" />
        </form>
      </section>

      <Footer />
    </main>
  );
}
