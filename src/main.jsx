import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import PasteStore from './store/store.js'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={PasteStore}>
    <App />
    <Toaster/>
  </Provider>
  </StrictMode>,
)
