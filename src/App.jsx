import './App.css'

import PaginaLogin from './pages/login/login'
import { UsuarioContextProvider } from './context/UsuarioContext'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
    <UsuarioContextProvider>
      <Outlet/>
    </UsuarioContextProvider>
    </>
  )
}

export default App
