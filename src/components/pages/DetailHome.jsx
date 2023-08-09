import SlideShow from './SlideShow'
import { homeList } from '../../datas/logements'
import Collapse from '../collapse/Collapse'
import Error from './Error'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import '../../styles/DetailHome.scss'

function DetailHome() {
  // Obtenir l'id du logement à partir des paramètres d'URL
  const { id } = useParams()
  // Utiliser un état pour stocker l'id du logement sélectionné
  const selectedHome = homeList.find((home) => home.id === id)

  if (!selectedHome) {
    // Gérer le cas où le logement n'est pas trouvé
    return <Error />
  }

  // Extraire les informations du logement sélectionné
  const { title, description, host, rating, location, equipments, tags } =
    selectedHome

  // Convertir la valeur de notation en nombre entier
  const ratingValue = parseInt(rating, 10)

  return (
    <>
      <SlideShow data={selectedHome} />

      <div className="container-detail">
        <div className="header-detail">
          <div className="title-info">
            <h2>{title}</h2>
            <div className="detail-location">{location}</div>
            <ul className="detail-tags">
              {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>

          {/* Infos Hôte et évaluation */}
          <div className="host-rating">
            <ul>
              <li>
                <div className="host-image">
                  {host.name}
                  <img src={host.picture} alt="Hôte" />
                </div>
              </li>
            </ul>
            <div className="rating-detailhome">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={index < ratingValue ? 'stellar filled' : 'stellar'}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Barres déroulantes */}
        <div className="detailhome-dropdown">
          <div className="custom-collapse">
            <Collapse title="Description" text={description} />
          </div>
          <div className="custom-collapse">
            <Collapse
              title="Équipements"
              text={
                <ul className="collapse-equipments">
                  {equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailHome
