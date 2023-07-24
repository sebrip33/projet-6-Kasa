import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Banner() {
  return (
    <div>
      <div className="kasa-header">
        <img src={logo} alt="Logo Kasa" className="kasa-logo" />
        <nav>
          <ul className="kasa-nav">
            <li>Accueil</li>
            <li>A propos</li>
          </ul>
        </nav>
      </div>
      <div className="banner">
        <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  )
}

export default Banner
