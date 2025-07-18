import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './css/index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* browser router allows user to change the web page based on the slash route at the end of the url ( / ) */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
