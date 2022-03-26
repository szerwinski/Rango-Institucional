import axios from "axios";
import React, { useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import "./news.scss";

export default function News() {
  async function loadContent() {
    const response = await axios.get(
      "https://www.staging.rangosemfila.com.br/v2/contents?targets[identifier]=LandingPage"
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
  }

  useEffect(loadContent);

  window.addEventListener("pageshow", () => {
    window.scrollTo(0, 0);
  })

  return (
    <main className="news">
      <Header />

      <section className="news-banner"></section>

      <section className="news-text">
        <h2 className="orange">Portal de notícias RanGo</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora
          eligendi eum error iste quam fugit debitis totam labore. Aut inventore
          unde dolorem est eveniet veritatis pariatur asperiores nesciunt
          suscipit?
        </p>
      </section>

      <section id="news-content" className="news-content"></section>

      <Footer />
    </main>
  );
}
