import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FsrsPage from './FsrsPage'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FsrsPage />
  </StrictMode>,
)
