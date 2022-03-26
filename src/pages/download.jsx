import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import dashboard from "../assets/dashboard.png";
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

        <section className="download-buttons">
          <h2 className="orange">Plataforma RanGo</h2>

          <div className="download-row">
            <p>Instalador para Windows e Mac:</p>

            <button className="btn-download">
              <p>Windows</p>
              <img
                className="button-logo"
                src="https://img.icons8.com/color/48/000000/windows-logo.png"
              />
            </button>
            <button className="btn-download">
              <p>Mac</p>
              <img className="button-logo" src={logoApple} />
            </button>
          </div>

          <div className="download-row">
            <p>Instalador para Android e IOS:</p>

            <button className="btn-download">
              <p>Android</p>
              <img
                className="button-logo"
                src="https://img.icons8.com/color/48/000000/android-os.png"
              />
            </button>
            <button className="btn-download">
              <p>IOS</p>
              <img className="button-logo" src={logoApple} />
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
