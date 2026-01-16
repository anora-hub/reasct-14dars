import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LikeContext from './context/LikeContext.jsx'
import CardContext from './context/CardContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <CardContext>
      <LikeContext>
        <App />
      </LikeContext>
   </CardContext>
  </StrictMode>,
)
