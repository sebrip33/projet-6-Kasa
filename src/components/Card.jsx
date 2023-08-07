import '../styles/Card.css'
import { Link } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'

function Card({ id, title, cover, rating }) {
  // Convertir la valeur de notation en nombre entier
  const ratingValue = parseInt(rating, 10)

  return (
    // Lien vers la page "DetailHome" en utilisant l'ID
    <Link to={`/DetailHome/${id}`} key={id} className="kasa-card">
      {/* Image de couverture du logement */}
      <img className="kasa-cover" src={cover} alt={title} />

      {/* Afficher la notation sous forme d'étoiles */}
      <div className="rating">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < ratingValue ? 'star filled' : 'star'}
          />
        ))}
      </div>

      <h3 className="img-title">{title}</h3>
    </Link>
  )
}

export default Card
