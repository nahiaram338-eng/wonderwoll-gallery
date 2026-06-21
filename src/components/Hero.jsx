import './Hero.css'

export default function Hero() {
  return (
    <section id="accueil" className="hero-section">
      <div className="floating-elements">
        <span className="float-item" style={{'--delay': '0s', top: '20%', left: '10%'}}>✨</span>
        <span className="float-item" style={{'--delay': '2s', top: '60%', left: '85%'}}>🎭</span>
        <span className="float-item" style={{'--delay': '4s', top: '30%', left: '90%'}}>🖼️</span>
        <span className="float-item" style={{'--delay': '1s', top: '70%', left: '15%'}}>🌟</span>
        <span className="float-item" style={{'--delay': '3s', top: '40%', left: '80%'}}>🎨</span>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">Bienvenue à la</span>
          <span className="highlight">Galerie Wonderwoll</span>
        </h1>
        
        <p className="hero-subtitle">
          ✦ Une collection exclusive d'œuvres félines ✦
        </p>
        
        <p className="hero-description">
          Découvrez notre sélection raffinée de produits inspirés par l'élégance 
          et le mystère des chats parisiens. Chaque pièce est une œuvre d'art 
          qui capture l'âme de Monsieur Chat.
        </p>

        <div className="hero-cta">
          <a href="#galerie" className="btn-primary">
            <span>Explorer la Collection</span>
            <span className="btn-arrow">→</span>
          </a>
          <a href="#about" className="btn-secondary">
            <span>Notre Histoire</span>
          </a>
        </div>
      </div>
    </section>
  )
}