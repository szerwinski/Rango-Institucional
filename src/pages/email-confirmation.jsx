import React from "react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import icon2 from "../assets/icon2.svg";
import "./email-confirmation.scss";

export default function EmailConfirmation() {
  return (
    <main className="email-confirmation">
      <Header />

      <section className="email-confirmation-content">
        <div className="email-confirmation-text">
          <h2 className="orange">Obrigado por se cadastrar no RanGo!</h2>

          <p>
            Seu cadastro já foi confirmado, agora é so aproveitar a praticidade
            que só o #RanGoSemFila pode proporcionar!
          </p>
        </div>

        <img src={icon2} alt="" />
      </section>

      <Footer />
    </main>
  );
}
