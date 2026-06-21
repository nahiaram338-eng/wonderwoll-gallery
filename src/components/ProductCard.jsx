import './ProductCard.css'

export default function ProductCard({ product, emoji, onAddToCart }) {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? '' : 'empty'}`}>★</span>
    ))
  }

  return (
    <div className="product-card">
      <div className="product-frame">
        <div className="product-image-container">
          <span className="product-emoji">{emoji}</span>
        </div>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.nombre}</h3>
        <p className="product-desc">{product.descripcion}</p>
        
        <div className="product-rating">
          {renderStars(product.calificacion)}
        </div>

        <div className="product-meta">
          <span className="product-price">€{product.precio.toFixed(2)}</span>
          <span className="product-stock">
            {product.stock} en stock
          </span>
        </div>

        <p className="product-material">
          <small>{product.material}</small>
        </p>

        <div className="product-actions">
          <button 
            className="btn-add-cart"
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
          >
            {product.stock > 0 ? 'Ajouter au Panier' : 'Épuisé'}
          </button>
          <button className="btn-wishlist">♡</button>
        </div>
      </div>
    </div>
  )
}