import React, { useEffect, useState } from 'react'
import '../styles/Banner.css'
import bannerImage1 from '../assets/img-banner.png'
import bannerImage2 from '../assets/Image-banner-2.png'

function Banner({ activeLink }) {
  const [bannerImage, setBannerImage] = useState(bannerImage1)

  useEffect(() => {
    if (activeLink === 'Accueil') {
      setBannerImage(bannerImage1)
    } else if (activeLink === 'A propos') {
      setBannerImage(bannerImage2)
    }
  }, [activeLink])

  return (
    <div
      className={`banner ${
        activeLink === 'Accueil' ? 'banner-img-1' : 'banner-img-2'
      }`}
    >
      {activeLink !== 'A propos' && (
        <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
      )}
    </div>
  )
}

export default Banner
