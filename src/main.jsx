import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.css'
import App from './App.jsx'
import TodoListApp from './TodoListApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoListApp />
  </StrictMode>,
)
