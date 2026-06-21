export default function Footer() {
  return (
    <footer id="contact" className="main-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="footer-mascot">🐱</span>
          <span className="footer-name">Monsieur Chat</span>
        </div>

        <div className="footer-links">
          <a href="#accueil" className="footer-link">Accueil</a>
          <a href="#galerie" className="footer-link">Galerie</a>
          <a href="#about" className="footer-link">À Propos</a>
          <a href="#contact" className="footer-link">Contact</a>
        </div>

        <div className="footer-social">
          <a href="#" className="social-link" title="Instagram">📷</a>
          <a href="#" className="social-link" title="Facebook">📘</a>
          <a href="#" className="social-link" title="Pinterest">📌</a>
        </div>

        <p className="footer-tagline">
          "L'élégance féline depuis Paris"
        </p>

        <div className="footer-bottom">
          <p>&copy; 2024 Wonderwoll Gallery. Tous droits réservés.</p>
          <p className="footer-credit">Créé avec amour et passion pour l'art</p>
        </div>
      </div>
    </footer>
  )
}