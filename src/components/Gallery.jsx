import { useState } from 'react'
import ProductCard from './ProductCard'
import './Gallery.css'

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'Moda Clásica', label: 'Mode Classique' },
  { id: 'Biblioteca', label: 'Bibliothèque' },
  { id: 'Música', label: 'Musique' },
  { id: 'Cafetería', label: 'Cafétéria' }
]

export default function Gallery({ products, onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.categoria === activeCategory)

  const getEmojiForCategory = (categoria) => {
    const emojis = {
      'Moda Clásica': '👗',
      'Biblioteca': '📚',
      'Música': '🎵',
      'Cafetería': '☕'
    }
    return emojis[categoria] || '🎁'
  }

  return (
    <section id="galerie" className="gallery-section">
      <div className="section-header">
        <div className="section-ornament">
          <div className="ornament-line"></div>
          <span className="ornament-symbol">❧</span>
          <div className="ornament-line"></div>
        </div>
        
        <h2 className="section-title">La Galerie</h2>
        <p className="section-subtitle">Œuvres d'art félines à collectionner</p>
        
        <div className="section-ornament">
          <div className="ornament-line"></div>
          <span className="ornament-symbol">❧</span>
          <div className="ornament-line"></div>
        </div>
      </div>

      <div className="gallery-tabs">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            emoji={getEmojiForCategory(product.categoria)}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  )
}