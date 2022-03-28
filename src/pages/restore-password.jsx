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
    document.getElementById("errortext").classList.add("show");
  }

  function handleEqualPasswords() {
    document.querySelector(".restore-password-content").classList.add("hide");
    document.querySelector(".loader").classList.remove("hide");

    services.handlePasswordRestore(password, passwordConfirm);

    setTimeout(() => {
      document.querySelector(".loader").classList.add("hide");
      document
        .querySelector(".restore-password-success")
        .classList.remove("hide");
    }, 3000);
  }

  window.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();

    password == passwordConfirm
      ? handleEqualPasswords()
      : handleDifferentPasswords();
  });

  return (
    <main className="restore-password">
      <Header />

      <section className="restore-password-content">
        <h2 className="orange restore-password-title">Redefinir senha</h2>

        <p className="restore-password-text">
          Insira sua nova senha nos campos abaixo:
        </p>

        <form>
          <label htmlFor="password">Senha:</label>
          <div className="input-container">
            <input
              required
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
            required
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

      <section className="loader hide">
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>

      <section className="restore-password-success hide">
        <h2 className="orange restore-password-title">Pronto!</h2>

        <p className="restore-password-text">
          Sua senha foi alterada, agora você pode fazer login normalmente usando
          sua nova senha.
        </p>

        <a href="/">Voltar ao início</a>
      </section>

      <Footer />
    </main>
  );
}
