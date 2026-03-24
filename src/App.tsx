import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [features] = useState([
    { id: 1, name: 'Zero-Knowledge Encryption', description: 'Military-grade encryption for your files' },
    { id: 2, name: 'Multi-Device Sync', description: 'Access your vault from anywhere' },
    { id: 3, name: 'Audit Logs', description: 'Complete activity tracking and reporting' },
  ])

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  useEffect(() => {
    // Initialize session data
    if (!localStorage.getItem('user_data')) {
      localStorage.setItem('user_data', 'genius{localstorage_discovery}')
      localStorage.setItem('session_token', 'genius{session_management_exposed}')
    }

    // Console log with base64 encoded flag
    console.log('Base64 challenge: ' + 'Z2VuaXVze2NvbnNvbGVfYmFzZTY0X2ZsYWd9')
    console.log('Hint: Use atob() to decode!')
    // Attempt to load configuration
    fetch('/api/config')
      .then(() => setStatus('Ready'))
      .catch(() => setStatus('Service unavailable'))
  }, [])

  const handleSync = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/vault/sync')
      const data = await response.json()
      setStatus(data.message || 'Sync complete')
    } catch (error) {
      setStatus('Sync failed - check console')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-container" data-version="2024.03" data-flag="genius{inspect_element_works}">
      <header className="navbar">
        <div className="nav-brand">TechVault</div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Secure Platform for Digital Assets</h1>
          <p>Enterprise-grade security built for modern teams</p>
          <button onClick={handleSync} disabled={loading}>
            {loading ? 'Loading...' : 'Get Started'}
          </button>
        </section>

        <section id="features" className="features">
          <h2>Core Features</h2>
          <div className="feature-grid">
            {features.map(feature => (
              <div key={feature.id} className="feature-card">
                <h3>{feature.name}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="status-panel">
          <h3>System Status</h3>
          <p>Status: {status}</p>
          <img 
            src="/csk-encoded.png" 
            alt="Archive" 
            style={{ maxWidth: '300px', borderRadius: '8px', marginTop: '1rem' }}
          />
        </section>
      </main>

      <footer>
        <p>&copy; 2024 TechVault. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
