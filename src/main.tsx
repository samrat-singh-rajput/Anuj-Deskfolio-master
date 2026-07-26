import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Seed Anuj's GitHub as the "dev activity" link if the user hasn't set one yet.
try {
  localStorage.setItem('df-dev-activity-link', 'https://github.com/samrat-singh-rajput')
} catch {
  /* localStorage unavailable */
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
