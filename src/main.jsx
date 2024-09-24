import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppGrid from './AppGrid.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />  */}
    <AppGrid />
  </StrictMode>,
)
