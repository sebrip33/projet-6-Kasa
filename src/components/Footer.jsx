import { useEffect, useState } from 'react'
import footer from '../assets/footer.png'
import footerMobile from '../assets/footer-mobile.png'
import '../styles/Footer.css'

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="kasa-footer">
      <img
        src={isMobile ? footerMobile : footer}
        className="img-footer"
        alt="Footer"
      />
    </div>
  )
}
export default Footer
