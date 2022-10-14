import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import News from "./pages/news";
import Download from "./pages/download";
import ScrollToTop from "./hooks/scrolltop";
import EmailConfirmation from "./pages/email-confirmation";
import RestorePassword from "./pages/restore-password";
import LinksPage from "./pages/linksPage";

import "./base.scss";
import OndeEstamos from "./pages/ondeestamos";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBwja_tIWWbgQoyDg2GQqK3UoxajfbtasY",
  authDomain: "rango-institucional.firebaseapp.com",
  projectId: "rango-institucional",
  storageBucket: "rango-institucional.appspot.com",
  messagingSenderId: "13072672309",
  appId: "1:13072672309:web:3fcb2e81f4238e12caf37c",
  measurementId: "G-7XE089PN0H"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <HashRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sobre" element={<About />} />
      <Route path="noticias" element={<News />} />
      <Route path="plataforma" element={<Download />} />
      <Route path="confirmacao-email" element={<EmailConfirmation />} />
      <Route path="redefinir-senha" element={<RestorePassword />} />
      <Route path="links" element={<LinksPage />} />
      <Route path="ondeestamos" element={<OndeEstamos />} />
    </Routes>
  </HashRouter>,
  document.getElementById("root")
);
