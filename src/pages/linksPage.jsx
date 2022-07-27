import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import "./linksPage.scss";
import insta from "../assets/insta.png";
import fb from "../assets/fb.svg";
import tiktok from "../assets/tiktok.png";
import twitter from "../assets/twitter.svg";
import icon2 from "../assets/icon2.svg";

export default function LinksPage() {
  return (
    <main>
      <Header />

      <section className="linksContent">
        <h1>Confira nossas redes sociais:</h1>

        <div className="linksContainer">
          <a
            href="https://www.instagram.com/rangosemfila/?hl=en"
            className="mediaLink"
          >
            <p>Instagram</p>

            <img src={insta} alt="" />
          </a>

          <a
            href="https://www.facebook.com/rangosemfila/"
            className="mediaLink"
          >
            Facebook
            <img src={fb} alt="" />
          </a>

          <a href="https://twitter.com/rangosemfila" className="mediaLink">
            Twitter
            <img src={twitter} alt="" />
          </a>

          <a href="https://www.tiktok.com/@rangosemfila" className="mediaLink">
            Tiktok
            <img src={tiktok} alt="" />
          </a>
        </div>

        <img src={icon2} alt="" id="linksImage" />
      </section>

      <Footer />
    </main>
  );
}
