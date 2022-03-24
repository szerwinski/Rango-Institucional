import React from "react";
import logo from "../assets/logo.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="" className="footer-logo" />

      <span>
        <p className="footer-copyright">
          Copyright 2021 ® RanGo - Todos os direitos reservados RanGo com HD do
          Brasil Serviços de Tecnologia da Informação LTDA | CNPJ
          37.200.852/0001-32
        </p>
      </span>

      <secion className="footer-icons">
        <a href="">
          <img src={instagram} alt="" />
        </a>

        <a href="">
          <img src={facebook} alt="" />
        </a>
      </secion>
    </footer>
  );
}
