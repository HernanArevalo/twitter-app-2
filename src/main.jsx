import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import TwitterApp from './TwitterApp'
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <TwitterApp />
    </BrowserRouter>
  </React.StrictMode>
)
