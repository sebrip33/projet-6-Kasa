import React, { useState, useEffect } from 'react'
import '../../styles/SlideShow.scss'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function SlideShow({ data }) {
  const { pictures } = data
  const [currentSlide, setCurrentSlide] = useState(0)

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % pictures.length)
  }

  // Diapositive précédente
  const previousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? pictures.length - 1 : prevSlide - 1,
    )
  }

  // Vérifie s'il y a plus d'une image pour afficher les flèches et le numéro du carrousel
  const showArrowsAndNumber = pictures.length > 1

  // Utilise un effet pour définir un intervalle de défilement automatique toutes les 7 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % pictures.length)
    }, 7000)

    // Nettoie l'intervalle lorsque le composant n'est plus affiché à l'écran
    return () => clearInterval(interval)
  }, [pictures.length])

  return (
    <div className="slideshow">
      <div className="slideshow-content">
        <div className="slider">
          {pictures.map((picture, index) => (
            <img
              key={index}
              className={index === currentSlide ? 'Slide active' : 'slide'}
              src={picture}
              alt={`slide-${index + 1}`}
              style={{ display: index === currentSlide ? 'block' : 'none' }}
            />
          ))}
        </div>
        {/* Affichage des flèches de navigation et le numéro du carrousel */}
        {showArrowsAndNumber && (
          <>
            <span className="left-arrow" onClick={previousSlide}>
              <FaChevronLeft />
            </span>
            <span className="right-arrow" onClick={nextSlide}>
              <FaChevronRight />
            </span>
            <div className="slide-number">
              {currentSlide + 1} / {pictures.length}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default SlideShow
