import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';

import './base.scss';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/saibamais" element={<About />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
)
