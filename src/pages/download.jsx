import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import dashboard from "../assets/dashboard.svg";
import logoApple from "../assets/logo_apple.svg";
import "./download.scss";

export default function Download() {
  return (
    <main className="download">
      <Header />

      <div className="download-container">
        <section className="download-text">
          <h2 className="orange">Baixe nossa plataforma</h2>

          <p>
            Toda a praticidade e otimização proporcionados pela plataforma
            #RanGoSemFila a apenas alguns cliques de você!
          </p>
        </section>

        <img src={dashboard} alt="" />
      </div>

      <section className="download-section-buttons">
        <a
          href="https://www.portal.rangosemfila.com.br/"
          className="download-button"
        >
          <img
            className="button-logo"
            src="https://img.icons8.com/color/48/000000/windows-logo.png"
          />
        </a>

        <a href="" className="download-button">
          <img src="https://img.icons8.com/color/48/000000/safari--v1.png" />
        </a>

        <a
          href="https://apps.apple.com/br/app/rango/id1562027417"
          className="download-button"
        >
          <img className="button-logo" src={logoApple} />
        </a>

        <a href="" className="download-button">
          <img
            className="button-logo"
            src="https://img.icons8.com/color/48/000000/android-os.png"
          />
        </a>
      </section>

      <Footer />
    </main>
  );
}
