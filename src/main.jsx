import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from "./router/routes.jsx"
import { UsuarioContextProvider } from './context/UsuarioContext'




ReactDOM.createRoot(document.getElementById('root')).render(
  <UsuarioContextProvider>
    <RouterProvider router={routes} />
  </UsuarioContextProvider>
)
