import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import AOS and its styles
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// Initialize AOS globally
AOS.init();
