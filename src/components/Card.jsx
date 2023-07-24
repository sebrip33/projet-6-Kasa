import '../styles/Card.css'
import { FaStar } from 'react-icons/fa'

function Card({ id, title, cover, rating }) {
  const ratingValue = parseInt(rating, 10)
  return (
    <li key={id} className="kasa-card">
      <img className="kasa-cover" src={cover} alt={title} />
      <div className="rating">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={index < ratingValue ? 'star filled' : 'star'}
          />
        ))}
      </div>
      <h3 className="img-title">{title}</h3>
    </li>
  )
}
export default Card
