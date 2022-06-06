import axios from "axios";
import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import Footer from "../components/footer";
import Header from "../components/header";
import "./news.scss";

export default function News() {
  async function loadContent() {
    document.querySelector(".loading").style.display = "flex";

    const response = await axios.get(
      "https://www.api.rangosemfila.com.br/v2/contents?targets[identifier]=LandingPage"
    );

    const data = response.data;

    data.forEach((element) => {
      const newElement = `<div class="news-card">
          <img class="news-card-image" src=${element.medias[0].formats.thumbnail.url} alt="" />

          <strong class="news-card-title">${element.title}</strong>

          <p class="news-card-text">${element.body}</p>
        </div>`;

      document.getElementById("news-content").innerHTML += newElement;
    });

    document.querySelector(".loading").style.display = "none";
  }

  useEffect(loadContent);

  return (
    <main className="news">
      <Header />

      <section className="news-banner"></section>

      <section className="news-text">
        <h2 className="orange">Portal de notícias RanGo</h2>

        <p>
          Aqui você confere todas as novidades do universo RanGo, como novas
          funcionalidades, parceiros, promoções, e muito mais. Fique ligado nas
          nossas notícias para saber tudo que está rolando e o que vai rolar
          também!
        </p>
      </section>

      <section id="news-content" className="news-content">
        <Spinner className="loading" animation="border" role="status"></Spinner>
      </section>

      <Footer />
    </main>
  );
}
