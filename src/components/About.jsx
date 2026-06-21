import './About.css'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-background">
        <div className="about-pattern"></div>
      </div>
      
      <div className="about-content">
        <div className="about-frame">
          <div className="frame-corner top-left"></div>
          <div className="frame-corner top-right"></div>
          <div className="frame-corner bottom-left"></div>
          <div className="frame-corner bottom-right"></div>
          
          <div className="about-grid">
            <div className="about-image">
              <div className="about-portrait">
                <div className="portrait-placeholder">
                  <span className="gallery-icon">🏛️</span>
                </div>
              </div>
            </div>
            
            <div className="about-text">
              <h2 className="about-title">Notre Histoire</h2>
              <div className="about-divider">
                <span>❧</span>
              </div>
              <p className="about-paragraph">
                Dans les ruelles pavées de Montmartre, où l'art respire dans 
                chaque pierre, Wonderwoll Gallery est né d'un rêve. Un rêve d'élégance, 
                de mystère et de beauté intemporelle.
              </p>
              <p className="about-paragraph">
                Notre galerie rend hommage à l'esprit libre et raffiné des chats 
                parisiens, ces gardiens silencieux des secrets de la Ville Lumière. 
                Chaque œuvre raconte une histoire, chaque produit capture un moment 
                de grâce féline.
              </p>
              <p className="about-paragraph">
                Depuis 1892, nous sélectionnons avec passion des pièces uniques 
                qui incarnent l'art de vivre à la française. Mode, littérature, 
                musique et gastronomie se rencontrent sous le regard bienveillant 
                de Monsieur Chat.
              </p>
              <div className="signature">
                <span className="signature-line">Avec amour et élégance,</span>
                <span className="signature-name">Monsieur Chat</span>
                <span className="signature-paw">🐾</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}