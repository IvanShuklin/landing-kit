import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { config } from './config'
import { applyConfigToDocument } from './lib/theme'
import { captureUtm } from './lib/leads'
import './styles/global.css'

applyConfigToDocument(config)
captureUtm()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
