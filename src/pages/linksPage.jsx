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
            <a target="_blank" href="https://www.facebook.com/rangosemfila">
              <li>
                <img src={fb} alt="Facebook" />

                <i>/rangosemfila</i>
              </li>
            </a>
            <a target="_blank" href="https://www.instagram.com/rangosemfila/">
              <li>
                <img src={insta} alt="Instagram" />

                <i>@rangosemfila</i>
              </li>
            </a>
            <a target="_blank" href="https://www.tiktok.com/@rangosemfila">
              <li>
                <img src={tiktok} alt="TikTok" />

                <i>@rangosemfila</i>
              </li>
            </a>
            <a target="_blank" href="https://twitter.com/rangosemfila">
              <li>
                <img src={twitter} alt="Twitter" />

                <i>@rangosemfila</i>
              </li>
            </a>
          </ul>

          <div
            className="linksImage"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
