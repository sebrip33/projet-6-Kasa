import React, { useState, useRef, useEffect } from 'react'
import '../../styles/Collapse.css'
import ArrowUp from '../../assets/arrowup.png'
import ArrowDown from '../../assets/arrowdown.png'

function Collapse({ title, text }) {
  // État pour contrôler l'ouverture/fermeture du Collapse
  const [open, setOpen] = useState(false)

  // Hauteur du contenu déroulé
  const [height, setHeight] = useState(0)

  const contentRef = useRef(null)

  // Fonction pour basculer l'ouverture/fermeture du Collapse
  const toggleCollapse = () => {
    setOpen((current) => !current)
  }

  // Mettre à jour la hauteur en fonction de l'état "open"
  useEffect(() => {
    setHeight(open ? contentRef.current.scrollHeight : 0)
  }, [open])

  return (
    <div className={`container ${open ? 'open' : ''}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h3>{title}</h3>
        {/* Utiliser ArrowUp ou ArrowDown en fonction de l'état "open" */}
        <img
          src={open ? ArrowDown : ArrowUp}
          alt={open ? 'Flêche haut' : 'Flêche bas'}
          className="arrow-icon"
        />
      </div>
      <div
        className="collapse-text-container"
        style={{ height: `${height}px` }}
        ref={contentRef}
      >
        {/* Afficher le texte du Collapse */}
        {typeof text === 'string' ? (
          <p className="collapse-text">{text}</p>
        ) : (
          <div className="collapse-text">{text}</div>
        )}
      </div>
    </div>
  )
}

export default Collapse
