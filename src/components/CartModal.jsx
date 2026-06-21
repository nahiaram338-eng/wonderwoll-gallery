export default function CartModal({ isOpen, onClose, cart, total, onUpdateQuantity, onRemove }) {
  if (!isOpen) return null

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
    <div className={`cart-modal ${isOpen ? 'active' : ''}`}>
      <div className="cart-overlay" onClick={onClose}></div>
      <div className="cart-content">
        <div className="cart-header">
          <h3>Votre Panier</h3>
          <button className="cart-close" onClick={onClose}>✕</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="cart-empty">
              Votre panier est vide, mon cher ami... 🐱
            </p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  {getEmojiForCategory(item.categoria)}
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.nombre}</div>
                  <div className="cart-item-price">€{item.precio.toFixed(2)}</div>
                  <div className="cart-item-quantity">
                    <button 
                      className="qty-btn" 
                      onClick={() => onUpdateQuantity(item.id, -1)}
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button 
                      className="qty-btn"
                      onClick={() => onUpdateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  className="cart-item-remove"
                  onClick={() => onRemove(item.id)}
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span className="total-amount">€{total.toFixed(2)}</span>
          </div>
          <button className="btn-checkout" disabled={cart.length === 0}>
            <span>Passer la Commande</span>
            <span>💳</span>
          </button>
        </div>
      </div>
    </div>
  )
}