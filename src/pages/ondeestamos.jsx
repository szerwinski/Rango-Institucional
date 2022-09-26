import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import Header from "../components/header";
import arrow from "../assets/arrow.png";
import ceubLogo from "../assets/ceub.jpeg";
import catolica from "../assets/catolica.jpg";
import udfLogo from "../assets/udf.png";
import Footer from "../components/footer";
import $ from "jquery";

import "./ondeestamos.scss";

const ceub = [
  {
    name: "Banzos Burguer",
    image:
      "https://s3.sa-east-1.amazonaws.com/restaurants.images/31/profile/thumbnail_31_profile_png_51c5c0aa13.png",
  },
  {
    name: "Rei Arthur Pastelaria",
    image:
      "https://s3.sa-east-1.amazonaws.com/restaurants.images/29/profile/thumbnail_29_profile_png_8cf0cbd944.png",
  },
  {
    name: "Rossoni",
    image:
      "https://s3.sa-east-1.amazonaws.com/restaurants.images/25/profile/thumbnail_25_profile_png_5cdccf4fa0.png",
  },
  {
    name: "Fast Grill",
    image:
      "https://s3.sa-east-1.amazonaws.com/restaurants.images/16/profile/thumbnail_16_profile_png_ae5d48bfdf.png",
  },
  {
    name: "Calzoon",
    image:
      "https://s3.sa-east-1.amazonaws.com/restaurants.images/17/profile/thumbnail_17_profile_png_256a070e53.png",
  },
  {
    name: "Geléia",
    image:
      "https://s3.sa-east-1.amazonaws.com/restaurants.images/19/profile/thumbnail_19_profile_png_6cf18d20d2.png",
  },
];

const ucb = [
  {
    name: "Fada Café",
    image:
      "https://s3.sa-east-1.amazonaws.com/restaurants.images/30/profile/thumbnail_30_profile_png_1e7691e20f.png",
  },
  {
    name: "Chef Magno",
    image:
      "https://s3.sa-east-1.amazonaws.com/restaurants.images/26/profile/thumbnail_26_profile_png_06269451e9.png",
  },
  {
    name: "Lancheteria Gourmet",
    image:
      "https://s3.sa-east-1.amazonaws.com/restaurants.images/rango_logo_01_0e36b1fe5f.png?updated_at=2022-09-13T14:24:23.736Z",
  },
];

const udf = [
  {
    name: "Estação Universitária",
    image:
      "https://s3.sa-east-1.amazonaws.com/restaurants.images/24/profile/thumbnail_24_profile_png_127a7a71be.png",
  },
];

export default class OndeEstamos extends Component {
  componentDidMount() {
    $(".carousel-control-prev-icon").css({ backgroundImage: `url(${arrow})` });
    $(".carousel-control-next-icon").css({
      backgroundImage: `url(${arrow})`,
      transform: "scale(-1, -1)",
    });
  }

  render() {
    return (
      <main className="ondeestamos">
        <Header />

        <div className="ondeestamosBanner"></div>

        <div className="ondeestamosHeader">
          <h2>Veja em quais instituições já estamos presentes!</h2>

          <p>
            Nosso foco está em poupar o tempo dos universitários proporcionando
            a eles a oportunidade de furar filas nas lanchonetes. Confira abaixo
            quais campus já fazem parte do universo RanGo sem fila!
          </p>
        </div>

        <Carousel id="carousel">
          <Carousel.Item>
            <div className="carouselCard">
              <div className="cardHeader">
                <img src={ceubLogo} alt="" />

                <h2>
                  UniCeub
                  <br />
                  <p>Restaurantes parceiros: </p>
                </h2>
              </div>

              <div className="icons">
                {ceub.map((el) => {
                  return (
                    <div className="icon">
                      <strong>{el.name}</strong>
                      <img src={el.image} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carouselCard">
              <div className="cardHeader">
                <img src={catolica} alt="" />

                <h2>
                  UCB
                  <br />
                  <p>Restaurantes parceiros: </p>
                </h2>
              </div>

              <div className="icons">
                {ucb.map((el) => {
                  return (
                    <div className="icon">
                      <strong>{el.name}</strong>
                      <img src={el.image} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="carouselCard">
              <div className="cardHeader">
                <img src={udfLogo} alt="" />

                <h2>
                  UDF
                  <br />
                  <p>Restaurantes parceiros: </p>
                </h2>
              </div>

              <div className="icons">
                {udf.map((el) => {
                  return (
                    <div className="icon">
                      <strong>{el.name}</strong>
                      <img src={el.image} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        <Footer />
      </main>
    );
  }
}
