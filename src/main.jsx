import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'




async function deferRender() {

  const {worker } = await import("./mocks/browser.js")
  return worker.start()
}

deferRender().then(()=> {
  createRoot(document.getElementById('root')).render(
  
      <BrowserRouter>
        <App />
      </BrowserRouter>
 
  );
});
  