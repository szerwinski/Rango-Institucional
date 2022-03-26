import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Form from "../components/form";
import avatar1 from "../assets/avatar1.svg";
import avatar2 from "../assets/avatar2.svg";
import "./about.scss";

export default function About() {

  window.addEventListener("pageshow", () => {
    window.scrollTo(0, 0);
  })

  return (
    <main className="about">
      <Header />

      <section className="about-banner"></section>

      <section className="about-section-text">
        <h2 className="orange">
          Desça e conheça o<br />
          #RanGoSemFila
        </h2>

        <h3>
          <b>Somos focados em otimizar seu dia-a-dia.</b>
          <br />
          Sabemos da dificuldade de conciliar trabalho, compromissos, hobbies,
          família e amigos numa rotina corrida. Por isso, desenvolvemos uma
          solução para que você possa aproveitar seu tempo da maneira que
          desejar.
        </h3>
      </section>

      <section className="about-section-cards">
        <div className="about-card">
          <img src={avatar1} alt="" />

          <div className="about-card-text">
            <h2 className="orange">NOSSO OBJETIVO</h2>

            <strong>
              Trazemos praticidade pra você que leva uma vida dinâmica.
            </strong>

            <p>
              Queremos te proporcionar um #RangoSemFila e sem estresse,
              minimizando o tempo perdido para que você possa aproveitá-lo
              intensamente da maneira que preferir.
            </p>
          </div>
        </div>

        <div className="about-card">
          <img src={avatar2} alt="" />

          <p>
            Por meio de uma plataforma que lhe conecta aos seus estabelecimentos
            favoritos, proporcionamos a melhor experiência a apenas um clique de
            distância e sem custos adicionais. A partir da interação direta com
            o estabelecimento, você desfruta seu RanGo da maneira correta: sem
            preocupações.
          </p>
        </div>
      </section>

			<Form />

      <Footer />
    </main>
  );
}
