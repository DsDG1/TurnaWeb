import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CurriculumPage from './CurriculumPage'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CurriculumPage />
  </StrictMode>,
)
