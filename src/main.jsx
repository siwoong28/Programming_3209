import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import App from './App.jsx'
import TodoListApp from './TodoListApp.jsx'
import HomeApp from './HomeApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeApp />
  </StrictMode>,
)
