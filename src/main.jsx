import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from "./router/routes.jsx"
import { UsuarioContextProvider } from './context/UsuarioContext'
import {ExercicioContextProvider} from './context/ExercicioContext.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <UsuarioContextProvider>
    <ExercicioContextProvider>
    <RouterProvider router={routes} />
    </ExercicioContextProvider>
  </UsuarioContextProvider>
)
