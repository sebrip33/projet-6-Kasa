import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Error from '../pages/Error';
import Header from '../Header';
import Footer from '../Footer';
import '../../styles/App.scss';
import { createRoot } from 'react-dom/client';
import Card from '../Card';
import DetailHome from './DetailHome';

const root = createRoot(document.getElementById('root'));

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/DetailHome/:id" element={<DetailHome />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export { root, App };
