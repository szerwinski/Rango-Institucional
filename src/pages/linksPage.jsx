import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import "./linksPage.scss";
import image from "../assets/linksImage.png";
import insta from "../assets/insta.png";
import fb from "../assets/fb.png";
import tiktok from "../assets/tiktok.png";
import twitter from "../assets/twitter.png";

export default function LinksPage() {
  return (
    <main>
      <Header />

      <section className="links">
        <div className="linksContainer">
          <ul>
            <li>
              <img src={fb} alt="" />

              <i>/rangosemfila</i>
            </li>
            <li>
              <img src={insta} alt="" />

              <i>@rangosemfila</i>
            </li>
            <li>
              <img src={tiktok} alt="" />

              <i>@rangosemfila</i>
            </li>
            <li>
              <img src={twitter} alt="" />

              <i>@rangosemfila</i>
            </li>
          </ul>
        </div>

        <div
          className="linksImage"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </section>

      <Footer />
    </main>
  );
}
