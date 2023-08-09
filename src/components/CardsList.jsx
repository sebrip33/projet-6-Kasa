import { homeList } from '../datas/logements.js'
import Card from './Card.jsx'
import '../styles/CardList.scss'

// Fonction pour afficher la liste des cartes de logements
function CardsList() {
  return (
    <div className="card-list-container">
      {/* Parcourir la liste des logements et afficher une carte pour chaque logement */}
      {homeList.map((home) => (
        <Card
          key={home.id} // Clé unique pour la carte
          id={home.id} // ID du logement
          title={home.title} // Titre du logement
          cover={home.cover} // Image de couverture du logement
          rating={home.rating} // Notation du logement
        />
      ))}
    </div>
  )
}

export default CardsList
