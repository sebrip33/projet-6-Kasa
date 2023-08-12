import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Header.scss'
import logo from '../assets/logo.png'

function Header() {
  // Obtenir l'emplacement actuel de la page
  const location = useLocation()

  // État pour suivre le lien actif
  const [activeLink, setActiveLink] = useState('Accueil')

  // Gestion du clic sur un lien de navigation
  const handleLinkClick = (link) => {
    if (link !== activeLink) {
      setActiveLink(link)
    }
  }

  // Mettre à jour le lien actif en fonction de l'emplacement de la page
  useEffect(() => {
    const path = location.pathname
    if (path === '/') {
      setActiveLink('Accueil')
    } else if (path === '/About') {
      setActiveLink('A propos')
    } else {
      setActiveLink('')
    }
  }, [location.pathname])

  return (
    <div className="kasa-header">
      <img src={logo} alt="Logo Kasa" className="kasa-logo" />

      {/* Navigation */}
      <nav>
        <ul className="kasa-nav">
          {/* Lien Accueil */}
          <li>
            <Link
              to="/"
              onClick={() => handleLinkClick('Accueil')}
              className={activeLink === 'Accueil' ? 'active' : ''}
            >
              Accueil
            </Link>
          </li>

          {/* Lien A propos */}
          <li>
            <Link
              to="/About"
              onClick={() => handleLinkClick('A propos')}
              className={activeLink === 'A propos' ? 'active' : ''}
            >
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
