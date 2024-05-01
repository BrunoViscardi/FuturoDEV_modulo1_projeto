import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from "./router/routes.jsx"
import { UsuarioContextProvider } from './context/UsuarioContext'
import { ExercicioContextProvider } from './context/ExercicioContext.jsx'
import { AtivosContextProvider } from './context/AtivosContext.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <UsuarioContextProvider>
    <AtivosContextProvider>
      <ExercicioContextProvider>
        <RouterProvider router={routes} />
      </ExercicioContextProvider>
    </AtivosContextProvider>
  </UsuarioContextProvider>
)
