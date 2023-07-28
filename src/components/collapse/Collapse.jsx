import React, { useState } from 'react'
import '../../styles/Collapse.css'
import ArrowUp from '../../assets/arrowup.png'
import ArrowDown from '../../assets/arrowdown.png'

function Collapse({ title, text, classFlex, classTitle, classText }) {
  const [open, setOpen] = useState(false)

  const toggleCollapse = () => {
    setOpen((current) => !current)
  }

  return (
    <div className={`container ${classFlex}`}>
      <div className={`${classTitle} collapse-header`} onClick={toggleCollapse}>
        <h3>{title}</h3>
        <img
          src={open ? ArrowDown : ArrowUp}
          alt={open ? 'Flêche haut' : 'Flêche bas'}
          className="arrow-icon"
        />
      </div>
      {open && (
        <div className="collapse-text-container">
          <p className={`${classText} collapse-text`}>{text}</p>
        </div>
      )}
    </div>
  )
}

export default Collapse
