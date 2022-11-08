import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import dashboard from "../assets/dashboard.svg";
import logoApple from "../assets/logo_apple.svg";
import "./download.scss";
import { Col, Container, Row, Button } from "react-bootstrap";

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

      <Container fluid className="download-section-buttons">
        <a
          className="download-button"
          href="https://portal.rangosemfila.com.br/#/dash"
        >
          <Button>
            <img
              className="button-logo"
              src="https://img.icons8.com/color/96/000000/chrome--v1.png"
            />

            <p>Portal</p>
          </Button>
        </a>

        <a
          className="download-button"
          href="https://s3.sa-east-1.amazonaws.com/rango.dashboard/rango_makers_launcher.exe"
        >
          <Button>
            <img
              className="button-logo"
              src="https://img.icons8.com/color/48/000000/windows-logo.png"
            />

            <p>Windows</p>
          </Button>
        </a>

        {/* <a className="download-button" href="">
          <Button>
            <img src="https://img.icons8.com/color/48/000000/safari--v1.png" />

            <p>Mac</p>
          </Button>
        </a> */}

        <a
          className="download-button"
          href="https://apps.apple.com/br/app/rango-makers/id1611051740"
        >
          <Button>
            <img className="button-logo" src={logoApple} />

            <p>IOS</p>
          </Button>
        </a>

        <a
          className="download-button"
          href="https://play.google.com/store/apps/details?id=br.com.rangosemfila.rango_dashboard"
        >
          <Button>
            <img
              className="button-logo"
              src="https://img.icons8.com/color/48/000000/android-os.png"
            />

            <p>Android</p>
          </Button>
        </a>
      </Container>

      <Footer />
    </main>
  );
}
