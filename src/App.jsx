import { useState, useEffect } from 'react'
import WelcomeModal from './components/WelcomeModal'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import CartModal from './components/CartModal'
import Toast from './components/Toast'
import './index.css'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const [toast, setToast] = useState({ show: false, message: '' })

  // Cargar productos desde JSON
  useEffect(() => {
    fetch('./productos.json')
      .then(res => res.json())
      .then(data => setProducts(data.productos || []))
      .catch(err => console.error('Error cargando productos:', err))
  }, [])

  // Cargar carrito del localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('wonderwoll-cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Guardar carrito en localStorage
  useEffect(() => {
    localStorage.setItem('wonderwoll-cart', JSON.stringify(cart))
  }, [cart])

  // Mostrar toast
  const showToast = (message) => {
    setToast({ show: true, message })
    setTimeout(() => setToast({ show: false, message: '' }), 3000)
  }

  // Agregar al carrito
  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id)
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
    showToast(`${product.nombre} agregado al panier`)
  }

  // Actualizar cantidad
  const updateQuantity = (productId, delta) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.id === productId) {
          const newQuantity = item.quantity + delta
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item
        }
        return item
      }).filter(item => item.quantity > 0)
    })
  }

  // Remover del carrito
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
    showToast('Producto retirado du panier')
  }

  // Calcular total
  const cartTotal = cart.reduce((total, item) => total + (item.precio * item.quantity), 0)
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0)

  return (
    <>
      {showWelcome && (
        <WelcomeModal onClose={() => setShowWelcome(false)} />
      )}
      
      <Navigation 
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />
      
      <Hero />
      
      <About />
      
      <Gallery 
        products={products}
        onAddToCart={addToCart}
      />
      
      <Footer />
      
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        total={cartTotal}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
      
      <Toast 
        show={toast.show}
        message={toast.message}
      />
    </>
  )
}

export default App