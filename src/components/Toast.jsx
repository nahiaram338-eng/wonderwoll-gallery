import './Toast.css'

export default function Toast({ show, message }) {
  return (
    <div className={`toast ${show ? 'show' : ''}`}>
      <span className="toast-icon">✓</span>
      <span className="toast-message">{message}</span>
    </div>
  )
}