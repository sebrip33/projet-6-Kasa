import { homeList } from '../datas/logements.js'
import Card from './Card.jsx'
import '../styles/CardList.css'

function CardsList() {
  return (
    <div className="card-list-container">
      {homeList.map((home) => (
        <Card
          key={home.id}
          id={home.id}
          title={home.title}
          cover={home.cover}
          rating={home.rating}
        />
      ))}
    </div>
  )
}

export default CardsList
