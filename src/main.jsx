import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import News from "./pages/news";
import Download from "./pages/download";
import ScrollToTop from "./hooks/scrolltop";
import EmailConfirmation from "./pages/email-confirmation";
import RestorePassword from "./pages/restore-password";

import "./base.scss";

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/noticias" element={<News />} />
      <Route path="/plataforma" element={<Download />} />
      <Route path="/confirmacao-email" element={<EmailConfirmation />} />
      <Route path="/redefinir-senha" element={<RestorePassword />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
