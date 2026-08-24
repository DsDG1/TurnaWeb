import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AnkiPage from './AnkiPage'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AnkiPage />
  </StrictMode>,
)
