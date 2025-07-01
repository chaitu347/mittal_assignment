import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Contactform from './contactform/Contactform.jsx'
import Navbar from './contactform/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Contactform />
  </StrictMode>
)
