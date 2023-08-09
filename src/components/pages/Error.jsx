import { Link } from 'react-router-dom'
import '../../styles/Error.scss'

function Error() {
  // Affichage de la page d'erreur
  return (
    <div>
      <div className="error-container">
        <h1 className="error-title">404</h1>
        <p className="error-text">
          Oups ! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="error-link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  )
}

export default Error
