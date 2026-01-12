import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LikeContext from './context/LikeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <LikeContext>
      <App />
   </LikeContext>
  </StrictMode>,
)
