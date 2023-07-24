import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../components/pages/Home'
import About from '../../components/pages/About'
import Banner from "../Banner"
import Footer from "../Footer"
import "../../styles/App.scss"
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('root'));

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Banner />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />          
          </Routes>
          <Footer />
      </Router>
    </React.StrictMode> 
  );
}

export { root, App }