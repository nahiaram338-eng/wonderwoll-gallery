import './WelcomeModal.css'

export default function WelcomeModal({ onClose }) {
  return (
    <div className="welcome-modal">
      <div className="modal-content">
        <div className="modal-ornaments">
          <div className="modal-corner top-left"></div>
          <div className="modal-corner top-right"></div>
          <div className="modal-corner bottom-left"></div>
          <div className="modal-corner bottom-right"></div>
        </div>

        <div className="mascot-welcome">
          <div className="mascot-portrait-large">
            <div className="mascot-frame"></div>
            <div className="mascot-image-large">
              <span className="mascot-emoji-large">🐱</span>
              <div className="mascot-accessories">
                <span className="mascot-bowtie">🎀</span>
                <span className="mascot-monocle">👁️</span>
              </div>
            </div>
          </div>
        </div>

        <h1 className="modal-title">Bienvenue chez Wonderwoll!</h1>
        <p className="modal-subtitle">Galerie Parisienne depuis 1892</p>

        <div className="modal-divider">
          <div className="divider-line"></div>
          <span className="divider-ornament">❧</span>
          <div className="divider-line"></div>
        </div>

        <p className="modal-text">
          Je suis <strong>Monsieur Chat</strong>, votre hôte personnel dans cette 
          magnifique galerie. Permettez-moi de vous accueillir avec toute l'élégance 
          parisienne qui nous caractérise.
        </p>

        <div className="modal-offer">
          <h3 className="offer-title">Puis-je vous offrir quelque chose?</h3>
          <div className="offer-options">
            <span className="offer-option">
              <span className="offer-icon">☕</span> Un café?
            </span>
            <span className="offer-option">
              <span className="offer-icon">🍵</span> Un thé?
            </span>
            <span className="offer-option">
              <span className="offer-icon">🍷</span> Une coupe de champagne?
            </span>
          </div>
        </div>

        <p className="modal-text">
          N'hésitez pas à explorer nos quatre sections exclusives: 
          Mode Classique, Bibliothèque, Musique et Cafétéria. 
          Chaque pièce est une œuvre d'art waiting pour vous.
        </p>

        <button className="modal-btn" onClick={onClose}>
          Entrer dans la Galerie ✨
        </button>
      </div>
    </div>
  )
}