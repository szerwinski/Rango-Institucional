import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import News from './pages/news';
import Download from './pages/download';

import './base.scss';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/noticias" element={<News />} />
      <Route path="/plataforma" element={<Download />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
