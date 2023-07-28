import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Header.css'
import logo from '../assets/logo.png'

function Header() {
  const location = useLocation()
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [activeLink, setActiveLink] = useState('Accueil')

  const handleLinkClick = (link) => {
    if (link !== activeLink) {
      setActiveLink(link)
    }
  }

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
      <nav>
        <ul className={isCollapsed ? 'kasa-nav' : 'collapse-menu hidden'}>
          <li>
            <Link
              to="/"
              onClick={() => handleLinkClick('Accueil')}
              className={
                activeLink === 'Accueil'
                  ? 'collapse-link-1 active'
                  : 'collapse-link-1'
              }
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              onClick={() => handleLinkClick('A propos')}
              className={
                activeLink === 'A propos'
                  ? 'collapse-link-2 active'
                  : 'collapse-link-2'
              }
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
