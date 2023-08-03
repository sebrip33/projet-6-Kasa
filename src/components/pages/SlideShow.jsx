import React, { useState, useEffect } from 'react'
import '../../styles/SlideShow.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function SlideShow({ data }) {
  const { pictures } = data
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % pictures.length)
  }

  const previousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? pictures.length - 1 : prevSlide - 1,
    )
  }

  const showArrowsAndNumber = pictures.length > 1 // Vérifie si l'élément à plus d'une image

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % pictures.length)
    }, 7000) // Défilement automatique toutes les 3 secondes

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
