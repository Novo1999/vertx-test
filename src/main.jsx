import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AssignmentProvider } from './context/AssignmentContext.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AssignmentProvider>
      <App />
    </AssignmentProvider>
  </StrictMode>,
)
