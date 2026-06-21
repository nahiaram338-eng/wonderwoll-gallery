import { useState, useEffect } from 'react'
import './Navigation.css'

export default function Navigation({ cartCount, onOpenCart }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('accueil')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveLink(id)
    }
  }

  return (
    <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('accueil') }}>
          <span className="logo-mascot">🐱</span>
          <span className="logo-text">Wonderwoll</span>
        </a>

        <ul className="nav-links">
          <li>
            <a 
              href="#accueil" 
              className={`nav-link ${activeLink === 'accueil' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('accueil') }}
            >
              Accueil
            </a>
          </li>
          <li>
            <a 
              href="#galerie" 
              className={`nav-link ${activeLink === 'galerie' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('galerie') }}
            >
              Galerie
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('about') }}
            >
              À Propos
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="cart-icon-wrapper" onClick={onOpenCart}>
          <span className="cart-icon">🛒</span>
          {cartCount > 0 && (
            <span className="cart-count">{cartCount}</span>
          )}
        </div>
      </div>
    </nav>
  )
}