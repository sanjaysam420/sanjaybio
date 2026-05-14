import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// PWA Install prompt handler
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  // You can now display your install prompt UI
  console.log('PWA install prompt is ready');
});

window.addEventListener('appinstalled', () => {
  console.log('PWA has been installed');
  deferredPrompt = null;
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
