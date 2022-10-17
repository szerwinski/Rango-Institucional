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
