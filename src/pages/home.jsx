import React, { useState } from "react";
import Header from "../components/header.jsx";
import iphone from "../assets/iphone.gif";
import appstore from "../assets/appstore.svg";
import googleplay from "../assets/googleplay.svg";
import arrowWhite from "../assets/arrow-white.svg";
import one from "../assets/01.svg";
import two from "../assets/02.svg";
import three from "../assets/03.svg";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import "./home.scss";
import Form from "../components/form.jsx";
import Footer from "../components/footer.jsx";
import { Link } from "react-router-dom";

export default function Home() {
  const [text, setText] = useState("");

  const textData = [
    "Partiu fila… ou partiu RanGo?",
    "Sem fila, com tempo de sobra!",
    "Rápido para sua fome, perfeito para o seu tempo.",
    "Filas? Mantenha distância!",
    "Temos um #RanGo para sua fome!",
    "Aproveite seu primeiro RanGo, peça pelo App!",
  ];

  function typeWriter(textElement, textArray, wait = 3000) {
    this.textElement = textElement;
    this.textArray = textArray;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  const updateText = (text) => {
    setText(text);
  };

  typeWriter.prototype.type = function () {
    const i = this.wordIndex % this.textArray.length;
    const text = this.textArray[i];

    if (this.isDeleting) {
      this.txt = text.substring(0, this.txt.length - 1);
    } else {
      this.txt = text.substring(0, this.txt.length + 1);
    }

    updateText(this.txt);

    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.txt == text) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt == "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 200;
    }

    setTimeout(() => this.type(), typeSpeed);
  };

  window.addEventListener("load", init);

  function init() {
    const textElement = document.querySelector("#animationText");
    const textArray = textData;
    const wait = 3000;

    new typeWriter(textElement, textArray, wait);
  }

  window.addEventListener("scroll", handleCardsAnimation);

  function handleCardsAnimation() {
    let cards = document.querySelectorAll(".card");
    cards;
    const revealPoint = 450;

    for (var i = 0; i < cards.length; i++) {
      let cardTop = cards[i].getBoundingClientRect().top;
      const cardStyle = cards[i].style;

      cardTop < revealPoint ? (cardStyle.opacity = 1) : (cardStyle.opacity = 0);
    }
  }

  return (
    <main className="home">
      <Header />

      <div className="home-container-landing">
        <h1 id="animationText">
          {text}
          <span id="animationCursor"></span>
        </h1>

        <section className="home-section-calltoaction">
          <p className="home-text">
            Rápido para a sua fome.
            <br />
            Perfeito para o seu tempo.
          </p>

          <Link to="/sobre">
            <button className="btn-default">Saiba mais</button>
          </Link>
        </section>

        <img className="iphone" src={iphone} alt="" />

        <section className="home-section-appstores">
          <p>Baixe o aplicativo!</p>

          <div>
            <a
              className="appstoreIcon"
              href="https://apps.apple.com/br/app/rango/id1562027417"
            >
              <img name="appstore" src={appstore} alt="" />
            </a>

            <a className="appstoreIcon" href="">
              <img name="googleplay" src={googleplay} alt="" />
            </a>
          </div>

          <a href="#sejaparceiro">
            SEJA UM RESTAURANTE PARCEIRO
            <span>
              <img src={arrowWhite} alt="" />
            </span>
          </a>
        </section>
      </div>

      <div className="home-container-content">
        <h2>
          <span className="orange">#RanGoSemFila</span> minimiza o tempo gasto
          em filas.
          <br />
          #RanGoSemFila <span className="orange">é mudança e inovaçao</span>
        </h2>

        <div className="mobile-appstore-container">
          <h4>Baixe o app</h4>
          <a className="mobile-appstore-link" href="">
            <img src={appstore} alt="" />
          </a>

          <a className="mobile-appstore-link" href="">
            <img src={googleplay} alt="" />
          </a>
        </div>

        <h3>
          Para poupar seu tempo são necessários
          <br />
          <b>apenas alguns cliques e três passos simples:</b>
        </h3>

        <div className="home-section-cards">
          <div className="card">
            <img className="card-number" src={one} alt="1." />

            <p className="card-text">
              Você abre o app e encontra o RanGo que mais te agrada.
            </p>

            <img className="card-icon" src={icon1} alt="" />
          </div>

          <div className="card">
            <img className="card-number" src={two} alt="1." />

            <p className="card-text">
              Paga pelo app e retira no local sem precisar pegar filas.
            </p>

            <img className="card-icon" src={icon2} alt="" />
          </div>

          <div className="card">
            <img className="card-number" src={three} alt="1." />

            <p className="card-text">
              Aproveita o rango sem estresse e sem perda de tempo.
            </p>

            <img className="card-icon" src={icon3} alt="" />
          </div>
        </div>

        <div className="home-section-video">
          <iframe
            className="video"
            src="https://www.youtube.com/embed/PZ4pctQMdg4?autoplay=1&loop=1"
          ></iframe>
        </div>

        <div className="home-section-jobs">
          <h3>
            <b>Nosso tempo é valioso demais para ser desperdiçado em filas</b>
            <br />
            <i>
              "Minhas coisas favoritas da vida não custam dinheiro. É muito
              claro que o recurso mais precioso que todos nós temos é o tempo."
            </i>
            <br />
            <span>- Steve Jobs</span>
          </h3>
        </div>

        <Form />

        <Footer />
      </div>
    </main>
  );
}
