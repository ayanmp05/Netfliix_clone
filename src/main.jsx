// Importing React
import React from 'react'
//Importing React DOM
import ReactDOM from 'react-dom/client'
//Importing CSS properties
import './index.css'
//Importing App to Main
import App from './App.jsx'
//Importing Router
import { BrowserRouter } from 'react-router-dom'


//Creating DOM with root by element ID in BrowserRouter
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    
  </React.StrictMode>,
)
