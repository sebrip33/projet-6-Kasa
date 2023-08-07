import { useEffect, useState } from 'react'
import footer from '../assets/footer.png'
import footerMobile from '../assets/footer-mobile.png'
import '../styles/Footer.css'

function Footer() {
  // Etat pour déterminer si l'affichage est en mode mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600)

  useEffect(() => {
    // Fonction pour gérer le changement de taille de la fenêtre
    const handleResize = () => {
      // Mettre à jour l'état "isMobile" en fonction de la largeur de la fenêtre
      setIsMobile(window.innerWidth < 600)
    }

    // Ajouter un écouteur d'événement pour détecter les changements de taille de la fenêtre
    window.addEventListener('resize', handleResize)

    return () => {
      //  Supprime l'écouteur d'évenement si le composant n'est plus affiché
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Utilisation d'un tableau vide pour n'exécuter l'effet qu'une seule fois

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
